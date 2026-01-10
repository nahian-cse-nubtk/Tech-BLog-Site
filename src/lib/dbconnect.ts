import clientPromise from "./mongodb"



const dbConnect =async<T extends string>(collecion:T)=>{
    const client = await clientPromise;
    const db = client.db("TechBlog")
    const collectionCreation = db.collection(collecion)
    return collectionCreation;


}
export const postCollection =await dbConnect('posts')
