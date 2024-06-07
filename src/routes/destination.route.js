import { Router } from "express";
import {
  getDestinations,
  getDestinationsbyid,
  postDestination,
} from "../controllers/destination.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

router
  .route("/postDestination")
  .post(upload.fields([{ name: "img", maxCount: 1 }]), postDestination);

router.route("/getDestination").get(getDestinations);
router.route("/getDestinationbyid/:id").get(getDestinationsbyid);
export default router;
