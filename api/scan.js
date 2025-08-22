// api/scan.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const { result } = req.body;

    // Normalize client IP (Vercel usually sends comma-separated IPs)
    const ip =
      (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
      req.socket.remoteAddress ||
      "unknown";

    res.status(200).json({
      message: "Data received successfully",
      ip,
      result,
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
