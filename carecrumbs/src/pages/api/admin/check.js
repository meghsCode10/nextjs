import clientPromise from "../../../lib/mongodb";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const client = await clientPromise;
    const db = client.db("carecrumbs"); // ✅ अब यह सही से काम करेगा

    const user = await db.collection("admin").findOne({ email: session.user.email });

    console.log("🔹 User found:", user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("🚨 Error in /api/admin/check:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
