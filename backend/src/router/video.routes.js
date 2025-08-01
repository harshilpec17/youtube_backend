import { Router } from "express";
import {
  deleteVideo,
  getAllVideos,
  getVideoById,
  getVideoLikes,
  publishAVideo,
  togglePublishStatus,
  updateVideo,
  getVideoDisLikes,
} from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();
router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

router
  .route("/video")
  .get(getAllVideos)
  .post(
    upload.fields([
      {
        name: "videoFile",
        maxCount: 1,
      },
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    publishAVideo
  );

router
  .route("/video/:videoId")
  .get(getVideoById)
  .delete(deleteVideo)
  .patch(upload.single("newThumbnail"), updateVideo);

router.route("/video/like/:videoId").get(getVideoLikes);
router.route("/video/dislike/:videoId").get(getVideoDisLikes);

router.route("/toggle/publish/:videoId").patch(togglePublishStatus);

export default router;
