export const signup = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword, gender } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Definišemo funkciju login koja obrađuje login zahteve
export const login = (req, res) => {
  // Kada se pozove ova funkcija, vraća "Login da" kao odgovor
  res.send("Login da");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
