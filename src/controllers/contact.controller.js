import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { Destinations } from "../models/destination.model.js";
import { Contacts } from "../models/contact.model.js";

const postContact = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;
  if ([name, email, phone, message].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "all fields required");
  }
  const data = await Contacts.create({ name, email, phone, message });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});

const getContacts = asyncHandler(async (req, res) => {
  const data = await Contacts.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, data, "fetched successfully"));
});

export { postContact, getContacts };
