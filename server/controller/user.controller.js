import User from "../model/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedUser = req.user._id;
    const filteredUser = await User.find({ _id: { $ne: loggedUser } });
    res.status(200).json(filteredUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
