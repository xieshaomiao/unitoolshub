"use client";

import { useState } from "react";
import { Copy, FileJson2, Minimize2, Sparkles, Trash2 } from "lucide-react";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("Ready");

  function formatJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setStatus("Valid JSON");
    } catch {
      setOutput("");
      setStatus("Invalid JSON");
    }
  }

  function minifyJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setStatus("Minified");
    } catch {
      setOutput("");
      setStatus("Invalid JSON");
    }
  }

  async function copyOutput() {
    await navigator.clipboard.writeText(output);
    setStatus("Copied");
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setStatus("Ready");
  }

  return (
    <main className="tool-page">
      <section className="tool-hero">
        <div className="tool-icon-large">
          <FileJson2 size={34} />
        </div>

        <h1>JSON Formatter</h1>
        <p>Format, validate, minify and beautify JSON instantly.</p>

        <div className="tool-status">{status}</div>
      </section>

      <section className="tool-panel">
        <div className="editor-card">
          <div className="editor-header">
            <span>Input JSON</span>
            <button onClick={clearAll}>
              <Trash2 size={16} />
              Clear
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste JSON here, for example: {"name":"UniToolsHub"}'
          />
        </div>

        <div className="editor-card">
          <div className="editor-header">
            <span>Output</span>
            <button onClick={copyOutput} disabled={!output}>
              <Copy size={16} />
              Copy
            </button>
          </div>

          <pre>{output || "Formatted JSON will appear here..."}</pre>
        </div>
      </section>

      <div className="tool-actions">
        <button onClick={formatJson}>
          <Sparkles size={18} />
          Format JSON
        </button>

        <button onClick={minifyJson}>
          <Minimize2 size={18} />
          Minify JSON
        </button>
      </div>
    </main>
  );
}