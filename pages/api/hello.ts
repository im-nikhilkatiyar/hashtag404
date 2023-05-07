import type { NextApiRequest, NextApiResponse } from 'next'
import {connectToDatabase} from '../../libs/mongo';
type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
    console.log("Connecting to database...");
    let {db} = await connectToDatabase ();
    console.log("db connected");
    console.log("request body...");
    let bodyObject = JSON.parse(req.body);
    console.log(bodyObject);

    console.log("Inserting new post...");
    let newPost = await db.collection ("hello").insertOne(bodyObject);
    console.log(newPost)
    console.log("New post inserted:", newPost);
    
    res.status(200).json({message:"detail submitted in db"})
  }catch(err){
    console.log("Error:",err);
    res.status(400).json({message:"something went wrong"})
  }
}