import { AnnouncementModel } from "Models";
import mongoose from 'mongoose';
import uniqBy from 'lodash/uniqBy';

const or = (left: mongoose.Document[], right: mongoose.Document[]) => {
    return uniqBy([...left, ...right], '_id');
};

export default or;
