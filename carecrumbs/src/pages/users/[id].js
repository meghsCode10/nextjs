import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const { id } = req.query;

    if (req.method === "PUT") {
        const { role } = req.body;
        await db.collection("users").updateOne(
            { _id: new ObjectId(id) },
            { $set: { role } }
        );
        res.status(200).json({ message: "Role updated!" });
    }
}
