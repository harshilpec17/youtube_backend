const asyncHandler = (requestHandler) => async (req, res, next) => {
  return Promise.resolve(requestHandler(req, res, next)).catch((err) =>
    next(err)
  );
};

export { asyncHandler };

// const asyncHandler2 = (requestHandler) => async (req, res, next) => {
//   try {
//     await requestHandler(req, res, next);
//   } catch (error) {
//     err.status(err.code || 500).json({
//       message: err.message,
//       status: "failed",
//     });
//   }
// };
