import { Schema, model } from 'mongoose';
import validator from 'validator';

const usersShema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      validate: [validator.isEmail, 'Please fill a valid email address'],
      unique: true,
      required: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

usersShema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export const UsersCollection = model('users', usersShema);
