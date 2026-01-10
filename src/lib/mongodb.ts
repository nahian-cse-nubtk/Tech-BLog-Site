import {MongoClient} from"mongodb"
const uri =process.env.MONGODB_URI as string;

if(!uri){
    throw new Error("please add Monog db uri to .env file")

}
let client:MongoClient
let clientPromise: Promise<MongoClient>;

if(process.env.NODE_ENV ==='development'){
    const globalWithMongo = global as typeof global & {
        _mongoClientPromise?:Promise<MongoClient>
    }
    if(!globalWithMongo._mongoClientPromise){
        client = new MongoClient(uri);
        globalWithMongo._mongoClientPromise=client.connect()
    }
    clientPromise =globalWithMongo._mongoClientPromise
}
else{
    client = new MongoClient(uri);
    clientPromise = client.connect()
}
export default clientPromise;