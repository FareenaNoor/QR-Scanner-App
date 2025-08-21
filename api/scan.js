// api/scan.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const { result } = req.body;

    // Get client IP
    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress ||
      "unknown";

    res.status(200).json({
      message: "Data received successfully",
      ip,
      result,
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
