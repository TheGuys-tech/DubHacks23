import {MongoClient} from "mongodb"
import { MONGO_URL } from "$env/static/private"

export async function load({ params }) {
	let client = new MongoClient("mongodb://127.0.0.1:27017");
    try {
        await client.connect();
    }
    catch (error)
    {
        return {
            error: true,
            error_msg: "Could not connect to MongoDB."
        };
    }

    let db = client.db("users");
    let col = db.collection("users");

    let results = await col.find().toArray();

    return {
        users: JSON.parse(JSON.stringify(results ,(key,value) => key === '_id'? value.toString(value) : value))
    }

}