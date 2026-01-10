

import { postCollection } from './../lib/dbconnect';

export const getPost =async(limit: number = 0)=>{
    const result = await postCollection.find({}).sort({createdAt: -1}).limit(limit).toArray()
    return result;
}