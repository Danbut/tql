import mongoose from 'mongoose';
import intersectionBy from 'lodash/intersectionBy';

const and = (left: mongoose.Document[], right: mongoose.Document[]) => {
    return intersectionBy(left, right, '_id')
};

export default and;
 