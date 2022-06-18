import { Router } from "express";
import {
  createPackage,
  getPackages,
  getPackage,
  updatePackage,
  deletePackage,
} from "../Controller/Package.js";

const router = Router();

router.post("/", createPackage);
router.get("/getPackages", getPackages);
router.get("/getPackage/:id", getPackage);
router.put("/updatePackage/:id", updatePackage);
router.delete("/deletePackage/:id", deletePackage);
export default router;
