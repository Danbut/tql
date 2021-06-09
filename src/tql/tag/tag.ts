import mongoose from 'mongoose';

const tag = (tag: string, docs: mongoose.Document[], tags: mongoose.Document[]) => {
    return docs.filter(doc => doc.tags.some(t => t._id.equals(tags.find(t => t.name === tag)!!._id)));
}

export default tag;

