import { Collection, MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/"

const client = new MongoClient(url);
 const dbName ="config"


async function connect() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('puebas');

    const  result = await Collection.find({}).toArray()
    console.log(result)
    return 'conexion exitosa';
}

export default connect