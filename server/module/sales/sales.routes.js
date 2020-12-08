import express from "express";
import { asyncWrapper } from "../../utils/asyncWrapper";
import salesController from "./sales.controller";

const salesRoutes = express.Router();

// Create a new
salesRoutes.post("/", asyncWrapper(salesController.create));



export { salesRoutes };
