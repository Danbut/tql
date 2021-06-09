import mongoose, { Schema } from 'mongoose';

const tagSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
});

const TagModel = mongoose.model('Tag', tagSchema);

export default TagModel;
