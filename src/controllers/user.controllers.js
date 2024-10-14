import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErrors } from "../utils/ApiErrors.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();

    const refreshToken = user.generateRefreshToken();

    // to save the refresh token inside the model

    user.refreshToken = refreshToken;

    await user.save({
      validateBeforeSave: false,
    });

    return { refreshToken, accessToken };
  } catch (error) {
    throw new ApiErrors(
      500,
      "Something went wrong while generation access and refresh tokens"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // get the data from the  USER
  const { email, password, fullName, userName } = req.body;

  // Validate the data is not empty

  if (
    [email, password, fullName, userName].some((field) => field.trim() == "")
  ) {
    throw new ApiErrors(400, "All fields are required");
  }

  // check is user already exist by userName and email

  const existedUser = await User.findOne({
    $or: [{ email }, { userName }],
  });

  if (existedUser) {
    throw new ApiErrors(409, "User with email and password already exist");
  }

  // check image for avatar

  let avatarLocalFilePath;

  if (
    req.files &&
    Array.isArray(req.files?.avatar) &&
    req.files?.avatar.length > 0
  ) {
    avatarLocalFilePath = req.files?.avatar[0]?.path;
  }

  if (!avatarLocalFilePath) {
    throw new ApiErrors(400, "avatar file is required");
  }

  // check image for coverImage
  let coverImageLocalFilePath;

  if (
    req.files &&
    Array.isArray(req.files?.coverImage) &&
    req.files?.coverImage.length > 0
  ) {
    coverImageLocalFilePath = req.files?.coverImage[0]?.path;
  }

  // upload them on the cloudinary

  const avatar = await uploadOnCloudinary(avatarLocalFilePath);
  const coverImage = await uploadOnCloudinary(coverImageLocalFilePath);

  if (!avatar) {
    throw new ApiErrors(500, "error while uploading to the server");
  }

  // connect to db

  const newUser = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || " ",
    email,
    password,
    userName: userName.toLowerCase(),
  });

  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiErrors(500, "something went wrong while creating new user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  //req.body => data
  // username or email validation
  // find the user
  //password check
  // access and refresh token
  // send cookies

  const { email, userName, password } = req.body;

  if (!(userName || email)) {
    throw new ApiErrors(400, "username or email not found");
  }

  const user = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (!user) {
    throw new ApiErrors(400, "user does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiErrors(400, "password is not valid");
  }

  const userId = user._id;

  // access and refresh tokens

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  console.log(refreshToken);

  // at this above point we have access from the user which is in this scope, which does not have and refresh token
  // as we didn`t generated token until now. So you have two option either you can inject the token inside the object
  // or you can ask data base about it, we are performing database operation
  const loggedInUser = await User.findById(userId).select(
    "-password -refreshToken"
  );

  // this will be modified only from the server, it will be not modified through fronted
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "user logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  try {
    const incomingToken = req.cookie.refreshToken || req.body.refreshToken;

    if (!incomingToken) {
      throw new ApiErrors(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(
      incomingToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);

    console.log(user);

    if (!user) {
      throw new ApiErrors(401, "Invalid refresh token");
    }

    if (incomingToken !== user?.refreshToken) {
      throw new ApiErrors(401, "refresh Token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ApiErrors(401, error?.message || "Invalid refresh token");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
