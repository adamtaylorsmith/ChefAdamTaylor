import { getSession } from 'next-auth/react'
import { connectToDatabase } from '../../../util/mongodb'
// import { ObjectId } from "mongodb";
import connectDB from '../../../config/connectDB'
import { Timestamp } from "mongodb";
import Participant from '../../../models/participantModel'

// await connectToDatabase();
// connectDB();

export default async function handler(req, res) {

    // const {method} = req
    const { db } = await connectToDatabase();
    const session = await getSession({})
    console.log("hi from api post route", session)

    const { email, username, zip, icon, password } = req.body;
    await db.collection("participants").insertOne({
            email,
            username,
            zip,
            icon,
            password,
            // createdAt: new Date(),
        }
    );
    res.status(200).json({
        // data: await db.collection("participants").findOne({email: email}),
        message: "Created successfully!",
    })
    
    // const updateAccount = await db.collection("participants").updateOne({
    //     password: newPassword,
    //     username: newUsername,
    //     zip: newZip,
    //     icon: newIcon,
    // });

    // if (method === "GET") {
    //     console.log('GET')
    // try {
    //     const session = await getSession({})
    //     if(!session){
    //         return res.status(400).json({msg: "Invalid Authentication!"}) 
    //     }
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    // }

    // switch(req.method){
    //     case "POST":
    //       await createParticipant(req, res)
    //       break;
    //     case "GET":
    //       await findParticipant(req, res)
    //       break;
    //   }

    // const { method, body } = req;
    // console.log('method: ',method)
    // console.log('body: ',body)
    // User.findById(body.id).save()
    // try {
    //     const user = await db
    //     .collection("archery")
    //     .insertOne({})
    //     User.create({
    //         email: session.user.email
    //     })
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    // return (
    //     <>
    //     </>
    // )
}

// const findParticipant = async (req, res) => {
//     try {
//         const session = await getSession({})
//         if(!session){
//             return res.status(400).json({msg: "Invalid Authentication!"}) 
//         }
//         const { user } = session
//         console.log(session)
//         const participant = await Participant.find({email: user.email})
//         res.json(participant)
//         console.log(participant)
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//         // console.log(err)
//     }
// }

// const createParticipant = async (req, res) => {
//     try {
//         const session = await getSession({})
//         if(!session){
//             return res.status(400).json({msg: "Invalid Authentication!"}) 
//         }
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
// }