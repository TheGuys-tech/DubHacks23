import {MongoClient, ObjectId} from "mongodb"
import { MONGO_URL } from "$env/static/private"

export async function load({ params }) {
	let client = new MongoClient(MONGO_URL);
    try {
        await client.connect();
    }
    catch (error)
    {
        return {
            error: true,
            error_msg: "Could not connect to MongoDB.",
            postData: ""
        };
    }

    let db = client.db("groupSync");
    let col = db.collection("users");

    let results = await col.find().toArray();

    return {
        error: false,
        error_msg: "",
        users: JSON.parse(JSON.stringify(results ,(key,value) => key === '_id'? value.toString(value) : value)),
        postData: ""
    }

}

export const actions = {
    default: async ({request}) => {
        let formData = await request.formData();
        let client = new MongoClient(MONGO_URL);
        try {
            await client.connect();
        }
        catch (error)
        {
            return {postData: "Could not connect to MongoDB."};
        }
        
        let db = client.db("groupSync");
        let col = db.collection("users");
        
        let me = 0;
        let results = await col.find().toArray();
        let jsonData = JSON.parse(JSON.stringify(results ,(key,value) => key === '_id'? value.toString(value) : value))
        
        try {
            col.updateOne(
                {"_id": new ObjectId(jsonData[me]._id)},
                { "$set": 
                    {"name": formData.get("name")}
                }
            )

            return {
                postData: "Success!"
            }
        } 
        catch (error) {
            return {
                postData: "Error: " + error
            }
        }
    }
}