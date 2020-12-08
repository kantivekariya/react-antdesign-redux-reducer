import express from "express";
import { authRequired } from "../../config/auth";
import { authRoutes } from "../../module/auth/auth.routes";
import { salesRoutes } from "../../module/sales/sales.routes";
import { taxRoutes } from "../../module/tax/tax.routes";

const apiRoutes = express.Router();

apiRoutes.get("/", function(req, res, next) {
  res.json({ message: "from index api" });
});

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/tax", authRequired, taxRoutes);
apiRoutes.use("/sales", authRequired, salesRoutes);

export default apiRoutes;
