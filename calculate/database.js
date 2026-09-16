const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://coolprankster17_db_user:OTmjLSSdRysXXrY8@namastenode.nci8b0c.mongodb.net/";

const client = new MongoClient(uri);

async function main(){
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("TestingData");
    const collection = db.collection("User Information");

    // CRUD operations can be performed here

    return 'done.'
}

main().then(console.log).catch(console.error).finally(() => client.close());