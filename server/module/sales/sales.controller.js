import { salesModel } from "./sales.model";
import httpStatus from "../../utils/httpStatus";

const salesController = {};

salesController.create = async (req, res) => {
  try {
    let sales = await salesModel.create(req.body);
    return res.status(httpStatus.CREATED).json(sales);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};



export default salesController;
