import { model, Schema } from 'mongoose';
import validator from 'validator';

const contactShema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: {
      type: String,
      required: false,
      validate: [validator.isEmail, 'Please fill a valid email address'],
    },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
  },
  { timestamps: true },
);

export const ContactsCollection = model('contacts', contactShema);
