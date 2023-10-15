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
            error_msg: "Could not connect to MongoDB."
        };
    }

    let db = client.db("groupSync");
    let col = db.collection("users");

    let results = await col.find().toArray();

    return {
        error: false,
        error_msg: "",
        users: JSON.parse(JSON.stringify(results ,(key,value) => key === '_id'? value.toString(value) : value))
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
            if (formData.get("action") == "remove")
            {
                let newFriendsSrc = jsonData[me].friends.filter((friend) => friend != formData.get("friendId"))
                let newFriendsDst = jsonData.filter((user) => user._id == formData.get("friendId"))[0].friends.filter((friend) => friend != jsonData[me]._id)
                
                col.updateOne(
                    {"_id": new ObjectId(jsonData[me]._id)},
                    { "$set": 
                        {"friends": newFriendsSrc}
                    }
                )
                col.updateOne(
                    {"_id": new ObjectId(formData.get("friendId"))},
                    { "$set":
                        {"friends": newFriendsDst}
                    }
                )
            } 
            else if (formData.get("action") == "add")
            {
                let newFriendsSrc = jsonData[me].friends
                let newFriendsDst = jsonData.filter((user) => user._id == formData.get("friendId"))[0].friends
                if (newFriendsSrc.indexOf(formData.get("friendId")) < 0)
                {
                    newFriendsSrc.push(formData.get("friendId"));
                }
                if (newFriendsDst.indexOf(jsonData[me]._id) < 0)
                {
                    newFriendsDst.push(jsonData[me]._id)
                }

                col.updateOne(
                    {"_id": new ObjectId(jsonData[me]._id)},
                    { "$set": 
                        {"friends": newFriendsSrc}
                    }
                )
                col.updateOne(
                    {"_id": new ObjectId(formData.get("friendId"))},
                    { "$set":
                        {"friends": newFriendsDst}
                    }
                )
            }
            
            return {
                postData: "Success"
            }
        } 
        catch (error) {
            return {
                postData: "Error"
            }
        }
    }
}