const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://coolprankster17_db_user:OTmjLSSdRysXXrY8@namastenode.nci8b0c.mongodb.net/";

const client = new MongoClient(uri);

async function main(){
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("TestingData");
    const collection = db.collection("User Information");

    // CRUD operations can be performed here
    //Read
    const cursor = db.collection('User Information').find({});
    console.log("Documents in User Information collection:", await cursor.toArray());

    //Write
    const data = [{ firstname:'Varad', lastname:'Patil', age: 20, city: "Lucknow"}]
    await collection.insertOne(data);
    console.log("Document inserted into User Information collection", collection);
    return 'done.'
}

main().then(console.log).catch(console.error).finally(() => client.close());