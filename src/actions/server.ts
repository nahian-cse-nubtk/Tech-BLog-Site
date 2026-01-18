
import bcrypt from "bcryptjs";
import { User } from '@/type/User';
import { postCollection, userCollection } from './../lib/dbconnect';
import { Register } from "@/type/Register";
import { DBUser } from "@/type/DBUser";

export const getPost =async(limit: number = 0)=>{
    const result = await postCollection.find({}).sort({createdAt: -1}).limit(limit).toArray()
    return result;
}

export const retriveUser = async (payload: User) => {
  const { email, password } = payload;

  if (!email || !password) {
    return null;
  }

  const user = await userCollection.findOne<DBUser>({ email });
  if (!user) {
    return null;
  }

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    return null;
  }

  return {
    id: user._id.toString(), // REQUIRED by NextAuth
    email: user.email,
    name: user.name ?? null, // optional
    role: user.role,         // extra custom field (fine)
  };
};

export const postUser =async(payload:Register)=>{
    const {name,email,password} = payload;
    if(!email || !password){
        return null;
    }
    const isExist = await userCollection.findOne({email})
    if(isExist){
        return null;
    }
    const newUser ={
        provider: "credential",
        name,
        email,
        password: await bcrypt.hash(password,14),
        role: 'user'
    }
    const result = await userCollection.insertOne(newUser)
    if(result.acknowledged){
        return result;
    }
}