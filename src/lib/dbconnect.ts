import { Blog } from "@/type/Blog";
import clientPromise from "./mongodb"
import { Collection, Document } from "mongodb";
import { User } from "@/type/User";



const dbConnect =async<T extends Document>(collecionName:string):Promise<Collection<T>>=>{
    const client = await clientPromise;
    const db = client.db("TechBlog")
    const collectionCreation = db.collection<T>(collecionName)
    return collectionCreation;


}
export const postCollection =await dbConnect<Blog>('posts')
export const userCollection = await dbConnect<User>('Users')