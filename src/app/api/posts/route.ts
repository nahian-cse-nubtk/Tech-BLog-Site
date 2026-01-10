import { postCollection } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET(){
    const result = await postCollection.find({}).toArray()
    return NextResponse.json(result)
}