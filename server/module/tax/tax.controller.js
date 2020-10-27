import { taxModel } from "./tax.model";
import httpStatus from "../../utils/httpStatus";

const taxController = {};

taxController.create = async (req, res) => {
  console.log(res.body);
  try {
    let tax = await taxModel.create(req.body);
    return res.status(httpStatus.CREATED).json(tax);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

taxController.findAll = async (req, res) => {
  try {
    let getAllTaxes = await taxModel.find();
    return res.json(getAllTaxes);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Get User By ID
taxController.findOne = async (req, res) => {
  try {
    let getTax = await taxModel.findById(req.params.taxId);
    if (!getTax) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "Tax not found" });
    }
    return res.json(getTax);
  } catch (error) {
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: error.toString() });
  }
};

taxController.update = async (req, res) => {
  try {
    let taxUpdate = await taxModel.findById(req.params.taxId);
    if (!taxUpdate) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "Tax not found" });
    }
    Object.assign(taxUpdate, req.body);
    await taxUpdate.save();
    return res.json(taxUpdate);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

// Delete User By ID
taxController.delete = async (req, res) => {
  try {
    let deleteTax = await taxModel.findByIdAndRemove(req.params.taxId);
    if (!deleteTax) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: "Tax not found" });
    }
    return res.json({ message: "Tax deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};

export default taxController;
