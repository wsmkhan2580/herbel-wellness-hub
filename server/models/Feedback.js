import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  city: { type: String, required: true, trim: true, maxlength: 120 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: true, trim: true, maxlength: 600 },
  approved: { type: Boolean, default: false, index: true }
}, { timestamps: true });

feedbackSchema.index({ approved: 1, createdAt: -1 });

export default mongoose.model('Feedback', feedbackSchema);
