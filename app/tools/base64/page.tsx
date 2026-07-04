"use client";

import { useState } from "react";
import {
  Copy,
  Download,
  Lock,
  RefreshCw,
  Repeat2,
  Trash2,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("Ready");

  function encodeBase64() {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
      setStatus("Encoded");
    } catch {
      setStatus("Encode failed");
    }
  }

  function decodeBase64() {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
      setStatus("Decoded");
    } catch {
      setOutput("");
      setStatus("Invalid Base64");
    }
  }

  async function copyOutput() {
    if (!output) return;

    await navigator.clipboard.writeText(output);
    setStatus("Copied");

    setTimeout(() => {
      setStatus("Ready");
    }, 2000);
  }

  function downloadOutput() {
    if (!output) return;

    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "unitoolshub-base64-output.txt";
    link.click();

    URL.revokeObjectURL(url);
    setStatus("Downloaded");
  }

  function swapValues() {
    setInput(output);
    setOutput(input);
    setStatus("Swapped");
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setStatus("Ready");
  }

  return (
    <main className="tool-page">
      <section className="tool-hero">
        <div className="tool-icon-large blue">
          <Lock size={34} />
        </div>

        <h1>Base64 Encode / Decode</h1>
        <p>Encode and decode Base64 strings instantly.</p>

        <div className="tool-status">{status}</div>
      </section>

      <section className="tool-panel">
        <div className="editor-card">
          <div className="editor-header">
            <span>Input</span>

            <button onClick={clearAll}>
              <Trash2 size={16} />
              Clear
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste text or Base64 here..."
          />

          <div className="editor-footer">
            {input.length} characters
          </div>
        </div>

        <div className="editor-card">
          <div className="editor-header">
            <span>Output</span>

            <div className="editor-actions">
              <button onClick={copyOutput} disabled={!output}>
                <Copy size={16} />
                Copy
              </button>

              <button onClick={downloadOutput} disabled={!output}>
                <Download size={16} />
                Download
              </button>
            </div>
          </div>

          <pre>{output || "Result will appear here..."}</pre>

          <div className="editor-footer">
            {output.length} characters
          </div>
        </div>
      </section>

      <div className="tool-actions">
        <Button onClick={encodeBase64}>
          <RefreshCw size={18} />
          Encode
        </Button>

        <Button variant="secondary" onClick={decodeBase64}>
          <RefreshCw size={18} />
          Decode
        </Button>

        <Button variant="secondary" onClick={swapValues} disabled={!input && !output}>
          <Repeat2 size={18} />
          Swap
        </Button>
      </div>
    </main>
  );
}