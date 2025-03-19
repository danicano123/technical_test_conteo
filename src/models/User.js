import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  postal_code: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  created_at: { type: Date, default: Date.now },
  addresses: {
    type: [addressSchema],
    validate: (v) => Array.isArray(v) && v.length > 0,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
