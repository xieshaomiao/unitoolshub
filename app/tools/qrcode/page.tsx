"use client";

import { useState } from "react";
import QRCode from "qrcode";
import { Download, QrCode, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Page() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  async function generate() {
    if (!text.trim()) return;

    const url = await QRCode.toDataURL(text, {
      width: 320,
      margin: 2,
    });

    setImage(url);
  }

  function clear() {
    setText("");
    setImage("");
  }

  function download() {
    if (!image) return;

    const a = document.createElement("a");
    a.href = image;
    a.download = "qrcode.png";
    a.click();
  }

  return (
    <main className="tool-page">
      <section className="tool-hero">
        <div className="tool-icon-large purple">
          <QrCode size={34} />
        </div>

        <h1>QR Code Generator</h1>
        <p>Create QR codes instantly.</p>
      </section>

      <section className="qr-panel">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://example.com"
        />

        <div className="tool-actions">
          <Button onClick={generate}>Generate</Button>

          <Button variant="secondary" onClick={download}>
            <Download size={18} />
            Download
          </Button>

          <Button variant="secondary" onClick={clear}>
            <Trash2 size={18} />
            Clear
          </Button>
        </div>

        {image && (
          <div className="qr-preview">
            <img src={image} alt="QR Code" className="qr-image" />
          </div>
        )}
      </section>
    </main>
  );
}