export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmpassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log("Login User");
};

export const logout = (req, res) => {
  console.log("logout User");
};
