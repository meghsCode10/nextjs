export const config = {
    api: {
      bodyParser: {
        sizeLimit: "10mb", // ✅ Yahan define karo, next.config.mjs me nahi
      },
    },
  };
  
  export default function handler(req, res) {
    if (req.method === "POST") {
      res.status(200).json({ message: "Upload successful!" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  