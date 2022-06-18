import Packages from "../Modals/Package.js";
import express from "express";
import mongoose from "mongoose";

//to create package
export const createPackage = async (req, res) => {
  const { title, description } = req.body;

  const packages = new Packages({
    title,
    description,
  });
  console.log(packages);
  try {
    const savedPackage = await packages.save();
    console.log(savedPackage);
    res.status(200).json(savedPackage);
  } catch (err) {
    res.json({ message: err });
  }
};

//to get packages
export const getPackages = async (req, res) => {
  try {
    const packages = await Packages.find();
    res.status(200).json(packages);
  } catch (err) {}
  res.status(404).json({ message: err });
};

//to get single package
export const getPackage = async (req, res) => {
  const { id } = req.params;

  try {
    //check if product exists
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("package not found");

    const packages = await Packages.findById(id);

    res.status(200).json(packages);
  } catch (err) {
    res.status(404).json({ message: err });
  }
};

//update package
export const updatePackage = async (req, res) => {
  // console.log("We are here");
  const { id } = req.params;
  const { title, description } = req.body;
  console.log(title, description);
  console.log(req.body);

  try {
    //check if package exists
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("package not found");
    //const packages = await Packages.findById(id); //find package by id
    const updatedPackage = await Packages.findByIdAndUpdate(
      id,
      {
        id,
        title,
        description,
      },
      { new: true }
    );
    console.log(updatedPackage);
    res.json({ message: "package successfully updated" });
  } catch (err) {
    res.json({ message: err });
  }
};

//method to delete package
export const deletePackage = async (req, res) => {
  const { id } = req.params;
  console.log("Deleting Package");
  try {
    //check if product exists
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("package not found");

    await Packages.findByIdAndRemove(id);
    res.json({ message: "package successfully deleted" });
  } catch (err) {
    res.json({ message: err });
  }
};
