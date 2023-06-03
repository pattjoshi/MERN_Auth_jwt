import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

userSchema.pre("save", async function (next) {
  // this refers to the user
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.mathcPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password); // this.password is the hashed password
};

const User = mongoose.model("User", userSchema);

export default User;
