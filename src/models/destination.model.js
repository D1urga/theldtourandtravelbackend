import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    imgurl: {
      type: String,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
    cityTags: {
      type: String,
    },
    originalCost: {
      type: String,
    },
    discountCost: {
      type: String,
    },
    duration: {
      type: String,
    },
    distance: {
      type: String,
    },
    ittitle: {
      type: String,
    },
    itdes: {},
    fivestar: {
      type: String,
      required: true,
    },
    fourstar: {
      type: String,
      required: true,
    },
    threestar: {
      type: String,
      required: true,
    },
    isbestselling: {
      type: String,
      required: true,
    },
    breakfast: {
      type: String,
    },
    transfers: {
      type: String,
    },
    sightseeing: {
      type: String,
    },
    watersports: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Destinations = mongoose.model("Destinations", destinationSchema);
