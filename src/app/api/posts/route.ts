import { postCollection } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET(){
    const result = await postCollection.find({}).toArray()
    return NextResponse.json(result)
}
export async function POST(req:Request){
    const data =await req.json();
    if(data){
     data.createdAt=new Date()
    }
    const result = await postCollection.insertOne(data)
    return NextResponse.json(result)
}