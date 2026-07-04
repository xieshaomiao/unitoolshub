"use client";

import { useState } from "react";
import { Copy, Fingerprint, RefreshCw, Trash2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Page() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [status, setStatus] = useState("Ready");

  function generateUuid() {
    const list = Array.from({ length: 5 }, () => crypto.randomUUID());
    setUuids(list);
    setStatus("Generated");
  }

  async function copyAll() {
    if (uuids.length === 0) return;

    await navigator.clipboard.writeText(uuids.join("\n"));
    setStatus("Copied");
  }

  function clearAll() {
    setUuids([]);
    setStatus("Ready");
  }

  return (
    <main className="tool-page">
      <section className="tool-hero">
        <div className="tool-icon-large orange">
          <Fingerprint size={34} />
        </div>

        <h1>UUID Generator</h1>
        <p>Generate secure UUID v4 identifiers instantly.</p>

        <div className="tool-status">{status}</div>
      </section>

      <section className="uuid-panel">
        <div className="editor-header">
          <span>Generated UUIDs</span>

          <div className="editor-actions">
            <button onClick={copyAll} disabled={uuids.length === 0}>
              <Copy size={16} />
              Copy All
            </button>

            <button onClick={clearAll}>
              <Trash2 size={16} />
              Clear
            </button>
          </div>
        </div>

        <div className="uuid-list">
          {uuids.length === 0 ? (
            <p>Click Generate to create UUIDs...</p>
          ) : (
            uuids.map((uuid) => (
              <code key={uuid}>{uuid}</code>
            ))
          )}
        </div>
      </section>

      <div className="tool-actions">
        <Button onClick={generateUuid}>
          <RefreshCw size={18} />
          Generate UUIDs
        </Button>
      </div>
    </main>
  );
}