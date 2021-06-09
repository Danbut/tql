import { AnnouncementModel } from "Models";
import mongoose from 'mongoose';

const findAllDocsContainingAtLeastOneTagIdFromTagsIdsArr = async (tagsIds: mongoose.Types.ObjectId[]) => {
    return await AnnouncementModel.aggregate([
        { $match: {"tags.0": { $exists: true }}},
        { "$redact": { 
            "$cond": [ 
                { "$gte": [ 
                    { "$size": { "$setIntersection": [ "$tags", tagsIds ] } }, 
                    1
                ]},
                "$$KEEP", 
                "$$PRUNE" 
            ]
        }}
    ]);
}

export default findAllDocsContainingAtLeastOneTagIdFromTagsIdsArr;