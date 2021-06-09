import { AnnouncementModel } from 'Models';
import mongoose from 'mongoose';

const not = (operand: mongoose.Document[], docs: mongoose.Document[]) => {
    return docs.filter(doc => !operand.some(el => doc._id === el._id ));
};

export default not;
