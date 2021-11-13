import { UserModel } from "../models";

export async function getUser(req, res) {
  try {
    const { _id } = req.params;

    const user = await UserModel.findById(_id);

    if (!user) {
      return res.status(400).json({ user: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { _id } = req.params;
    const { userData } = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(
      _id,
      {
        $set: userData,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
