import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from "next-auth/react"
import { Timestamp } from "mongodb";
// import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router'

export default async function handler(req, res) {
  
  const query = req.query.id
  console.log(req.query.id)
  const { db } = await connectToDatabase();

  try {
    const results = await db
      .collection("participants")
      .find({ email: query })
      .toArray();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json(error);
  }
  // const { query } = useRouter();
  // console.log(query)

  // const session = await getSession();
  // console.log("hi from api post route", session)
  // console.log("req.query", req.query)

  // const { username, zip, icon, password } = req.body;
  
  // await db.collection("participants").updateOne(
  //     { email: query.id },
  //     {  $set: {
  //         username,
  //         zip,
  //         icon,
  //         password,
  //       }
  //     }
  // );
  // res.status(200).json({
  //     // data: await db.collection("participants").findOne({email: email}),
  //     message: "Updated successfully!",
  // })


  // db.posts.updateOne( 
  //   { _id : ObjectId("5ec55af811ac5e2e2aafb2b9") },
  //   { $push: { comments: NEW_COMMENT } }
  // ) 


  // // const { query: {id} } = req;
  // // console.log('method: ',method)
  // console.log('req: ',req)

  // const { db } = await connectToDatabase();

  // if (session) {
  //   try {
  //     const results = await db
  //       .collection("users")
  //       .find() //{ email: id }
  //     //   .sort({ timestamp: -1 })
  //     //   .toArray();
  //     res.status(200).json(results);
  //     console.log(results)
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }
}