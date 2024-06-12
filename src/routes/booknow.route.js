import { Router } from "express";

import { upload } from "../middlewares/multer.middlewares.js";
import { getContacts, postContact } from "../controllers/contact.controller.js";
import { getBooknow, postBooknow } from "../controllers/booknow.controller.js";

const router = Router();

router
  .route("/postBooknow")
  .post(upload.fields([{ name: "img", maxCount: 1 }]), postBooknow);

router.route("/getBooknow").get(getBooknow);
export default router;
