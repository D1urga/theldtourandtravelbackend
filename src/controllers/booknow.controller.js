import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { Destinations } from "../models/destination.model.js";
import { Contacts } from "../models/contact.model.js";
import { BookNow } from "../models/booknow.model.js";

const postBooknow = asyncHandler(async (req, res) => {
  const { name, email, phone, details } = req.body;
  if ([name, email, phone, details].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "all fields required");
  }
  const data = await BookNow.create({ name, email, phone, details });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const getBooknow = asyncHandler(async (req, res) => {
  const data = await BookNow.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, data, "fetched successfully"));
});

export { postBooknow, getBooknow };
