import { TagModel } from "Models";

const findAllTagsByTagsNames = async (tagsNames: string[]) => {
    return await TagModel.find({name: {$in: tagsNames}})
}

export default findAllTagsByTagsNames;