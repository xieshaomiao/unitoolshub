"use client";

import { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function formatJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setOutput("Invalid JSON");
    }
  }

  function clearAll() {
    setInput("");
    setOutput("");
  }

  return (
    <main style={{ padding: 40, maxWidth: 1000, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1>JSON Formatter</h1>
      <p>Format and validate JSON instantly.</p>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Paste JSON here, for example: {"name":"UniToolsHub"}'
        style={{ width: "100%", height: 220, marginTop: 20, padding: 12 }}
      />

      <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
        <button onClick={formatJson}>Format JSON</button>
        <button onClick={clearAll}>Clear</button>
      </div>

      <pre style={{ marginTop: 20, padding: 16, background: "#111", color: "#00ff88", overflow: "auto" }}>
        {output}
      </pre>
    </main>
  );
}
