import bcrypt from "bcrypt";

export const toBeHashPassword = async (password) => {
  try {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    return hashedPassword;
  } catch (error) {
    console.log("error in hashing the password: ", error);
  }
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
