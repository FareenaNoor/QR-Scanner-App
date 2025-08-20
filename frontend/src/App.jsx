import { useZxing } from "react-zxing";
import { useState } from "react";
import './App.css'
import QRScanner from "./components/QRScanner";
function App() {
  const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
      console.log("Scanned:", result.getText());
    },
  });

  return (
    <div>
      {/* <h1>QR Scanner</h1>
      <video ref={ref} style={{ width: "300px" }} />
      <p>Result: {result}</p> */}
      <QRScanner/>
    </div>
  );
}

export default App;
