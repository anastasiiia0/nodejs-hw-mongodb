import { Schema, model } from 'mongoose';

const sessionShema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'users' },
  accessToken: { type: String, required: true },
  refreshToken: { type: String, required: true },
  accessTokenValidUntil: { type: Date, required: true },
  refreshTokenValidUntil: { type: Date, required: true },
});

export const SessionsCollection = model('sessions', sessionShema);