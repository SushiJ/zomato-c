import { OrderModel } from "../models";

export async function getOrdersBasedOnId(req, res) {
  try {
    const { _id } = req.params;
    const orders = await OrderModel.findOne({ user: _id });
    if (!orders) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ orders });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function postNewOrdersBasedOnId(req, res) {
  try {
    const { _id } = req.params;
    const { orderDetails } = req.body;
    const addNewOrder = await OrderModel.findOneAndUpdate(
      {
        user: _id,
      },
      {
        $push: {
          orderDetails,
        },
      },
      {
        new: true,
      }
    );
    return res.json({ order: addNewOrder });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
