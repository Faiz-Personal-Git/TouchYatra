
import { Router } from "express";
import { editProfileController } from "../controllers/index.js";
import { uploadFile } from "../utils/index.js"

const router = Router();

router.get("/users/getProfile/:displayName", editProfileController.getUserProfile);

router.put("/users/updateSocialMedia/", editProfileController.updateSocialMedia);
router.put("/users/createExperience/", editProfileController.createExperience);
router.delete("/users/deleteExperience/:_id", editProfileController.deleteExperience);

router.put("/users/updateUserDetail/", uploadFile("/user").fields([
  { name: "ProfileFile", maxCount: 1 },
  { name: "BackgroundFile", maxCount: 1 }
]), editProfileController.updateUserDetail);

export const editProfileRoutes = router;