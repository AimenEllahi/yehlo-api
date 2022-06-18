import mongoose from "mongoose";

const PackageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const packages = mongoose.model("Packages", PackageSchema);
export default packages;
