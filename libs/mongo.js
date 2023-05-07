import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.DB_NAME;

// check the mongodb URI

if (!MONGODB_URI) {
    throw new Error('Define MONGODB_URI');
}

// check MONGODB NAME

if (!MONGODB_NAME) {
    throw new Error('Define MONGODB_NAME env variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // check the cache
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }
    // set the connection

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // connect to cluster
    const client = new MongoClient(MONGODB_URI, options);
    await client.connect();
    const db = client.db(MONGODB_NAME);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}
