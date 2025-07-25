import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filtetedUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password ");

    res.status(200).json(filtetedUsers);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
