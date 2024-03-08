import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fullName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    mobileNumber: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
