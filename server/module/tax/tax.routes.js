import express from "express";
import { asyncWrapper } from "../../utils/asyncWrapper";
import taxController from "./tax.controller";

const taxRoutes = express.Router();

// Create a new
taxRoutes.post("/", asyncWrapper(taxController.create));

// Retrieve all
taxRoutes.get("/", asyncWrapper(taxController.findAll));

// Retrieve a single with Id
taxRoutes.get("/:taxId", asyncWrapper(taxController.findOne));

// Update a with Id
taxRoutes.put("/:taxId", asyncWrapper(taxController.update));

// Delete a with Id
taxRoutes.delete("/:taxId", asyncWrapper(taxController.delete));

export { taxRoutes };
