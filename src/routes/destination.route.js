import { Router } from "express";
import {
  getDestinations,
  getDestinationsBestSeller,
  getDestinationsbyid,
  postDestination,
} from "../controllers/destination.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router
  .route("/postDestination")
  .post(upload.fields([{ name: "img", maxCount: 1 }]), postDestination);

router.route("/getDestination").get(getDestinations);
router.route("/getDestinationBestSelling").get(getDestinationsBestSeller);
router.route("/getDestinationbyid/:id").get(getDestinationsbyid);
export default router;
