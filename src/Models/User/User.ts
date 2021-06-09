import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
