import dbConnect from "@/lib/mongodb";
import Food from "@/models/Food";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { name, quantity, manufactureDate, expiryDate, imageUrl } = req.body;

      // Validation
      if (!name || !quantity || !manufactureDate || !expiryDate || !imageUrl) {
        return res.status(400).json({ success: false, message: "All fields are required" });
      }

      const newFood = new Food({
        name,
        quantity,
        manufactureDate,
        expiryDate,
        imageUrl,
      });

      await newFood.save();
      return res.status(201).json({ success: true, message: "Food added successfully", food: newFood });

    } catch (error) {
      return res.status(500).json({ success: false, message: "Error adding food" });
    }
  }

  return res.status(405).json({ success: false, message: "Method Not Allowed" });
}
