import React, { useState } from "react";
import { useZxing } from "react-zxing";

export default function QRScanner() {
  const [result, setResult] = useState("");
  const [ip, setIp] = useState("");
  const [scanning, setScanning] = useState(false);

  // 👇 Put your deployed backend URL here
  const BACKEND_URL = "https://qr-scanner-app-ashy.vercel.app/api/scan";

  const { ref } = useZxing({
    paused: !scanning,
    onDecodeResult(result) {
      const text = result.getText();
      setResult(text);
      setScanning(false);

      // Always send to deployed backend 🚀
      fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ result: text }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("📤 Sent to backend:", data);
          setIp(data.ip);
        })
        .catch((err) => console.error("Error sending data:", err));
    },
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Scanner</h1>
      <div>
        <button
          onClick={() => setScanning((prev) => !prev)}
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer",
            borderRadius: "8px",
            backgroundColor: scanning ? "red" : "green",
            color: "white",
            border: "none",
          }}
        >
          {scanning ? "Stop Scanning" : "Start Scanning"}
        </button>
      </div>

      {scanning && (
        <video
          ref={ref}
          style={{
            width: "100%",
            maxWidth: "400px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        />
      )}

      {result && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          ✅ Scanned Result: <strong>{result}</strong>
        </p>
      )}

      {ip && (
        <p style={{ marginTop: "10px", fontSize: "18px", color: "blue" }}>
          🌐 Scanner IP: <strong>{ip}</strong>
        </p>
      )}
    </div>
  );
}
