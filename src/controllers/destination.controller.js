import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";
import { Destinations } from "../models/destination.model.js";

const postDestination = asyncHandler(async (req, res) => {
  const {
    packageName,
    description,
    cityTags,
    originalCost,
    discountCost,
    ittitle,
    itdes,
    fivestar,
    fourstar,
    threestar,
    breakfast,
    transfers,
    isbestselling,
    sightseeing,
    watersports,
    duration,
    distance,
  } = req.body;
  if (
    [
      packageName,
      description,
      cityTags,
      originalCost,
      discountCost,
      ittitle,
      itdes,
      fivestar,
      isbestselling,
      fourstar,
      threestar,
      breakfast,
      transfers,
      sightseeing,
      watersports,
      duration,
      distance,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields required");
  }

  const path = req.files?.img[0]?.path;
  let url1 = await uploadOnCloudinary(path);

  const data = await Destinations.create({
    imgurl: url1?.url,
    packageName,
    description,
    cityTags,
    originalCost,
    discountCost,
    ittitle,
    itdes,
    fivestar,
    fourstar,
    threestar,
    breakfast,
    isbestselling,
    transfers,
    sightseeing,
    watersports,
    duration,
    distance,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, data, "posted successfully"));
});
const getDestinations = asyncHandler(async (req, res) => {
  const data = await Destinations.find({ isbestselling: false });

  return res.status(200).json(new ApiResponse(200, data, "data fetched"));
});
const getDestinationsBestSeller = asyncHandler(async (req, res) => {
  const data = await Destinations.find({ isbestselling: true });

  return res.status(200).json(new ApiResponse(200, data, "data fetched"));
});
const getDestinationsbyid = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await Destinations.findById(id);

  return res.status(200).json(new ApiResponse(200, data, "data fetched"));
});

export {
  postDestination,
  getDestinations,
  getDestinationsbyid,
  getDestinationsBestSeller,
};
