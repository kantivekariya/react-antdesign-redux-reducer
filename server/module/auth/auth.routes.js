import express from "express";
import userController from "./auth.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";

const crudRoutes = express.Router();

crudRoutes.get("/", function (req, res, next) {
  res.json({ message: "from index api" });
});

// Create
crudRoutes.post("/register", asyncWrapper(userController.register));

// Login
crudRoutes.post("/login", asyncWrapper(userController.login));

// me
crudRoutes.get('/me', asyncWrapper(userController.me));

// Logout
crudRoutes.get("/logout", asyncWrapper(userController.logout));

//GetAll Data
crudRoutes.get("/users", asyncWrapper(userController.findAll));

//GetBy ID
crudRoutes.get("/users/:userId", asyncWrapper(userController.findOne));

//update by ID
crudRoutes.put("/users/:userId", asyncWrapper(userController.update));

//Delete
crudRoutes.delete("/users/:userId", asyncWrapper(userController.delete));

export { crudRoutes };
