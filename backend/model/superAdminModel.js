import mongoose from 'mongoose';
const { Schema } = mongoose;

const superAdminSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('SuperAdmin', superAdminSchema);