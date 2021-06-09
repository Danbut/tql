import mongoose, { Schema } from 'mongoose';

const announcementSchema = new Schema({
  name: String,
  description: String,
  author: Schema.Types.ObjectId,
  phone: String,
  email: String,
  price: String,
  photoUrls: [String],
  address: String,
  updatedAt: { type: Date, default: Date.now },
  tags: [Schema.Types.ObjectId],
});

const AnnouncementModel = mongoose.model('Announcement', announcementSchema);

export default AnnouncementModel;
