import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  city: { type: String, required: true, trim: true, maxlength: 120 },
  problem: { type: String, required: true, trim: true, maxlength: 80 },
  description: { type: String, required: true, trim: true, minlength: 5, maxlength: 1000 }
}, { timestamps: { createdAt: true, updatedAt: false } });

leadSchema.index({ createdAt: -1 });
leadSchema.index({ problem: 1 });
leadSchema.index({ name: 'text', city: 'text', description: 'text' });

export default mongoose.model('Lead', leadSchema);
