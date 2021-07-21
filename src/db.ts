require('dotenv').config();
import {Db, MongoClient} from "mongodb"

let db: Db
// const url = process.env.MONGO_URI!

async function connect() : Promise<Db> {
    const client = await MongoClient.connect(process.env.MONGO_URI!,{  
        ignoreUndefined: true,
})
    console.log("database connected")
    return client.db()
}

export default async ():Promise<Db>=>{
    if(!db)
    db = await connect();
    return db;
}