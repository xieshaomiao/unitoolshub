"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { tools } from "@/lib/tools";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = tools.filter((tool) =>
    `${tool.name} ${tool.description} ${tool.category}`
      .toLowerCase()
      .includes(keyword.toLowerCase())
  );

  return (
    <>
      <button className="hero-search" onClick={() => setOpen(true)}>
        <span>🔍 Search tools...</span>
        <kbd>⌘K / Ctrl K</kbd>
      </button>

      {open && (
        <div className="search-overlay" onClick={() => setOpen(false)}>
          <div className="search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-header">
              <Search size={20} />
              <input
                autoFocus
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search tools..."
              />
              <button onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="search-results">
              {results.map((tool) => (
                <Link href={tool.href} key={tool.id} onClick={() => setOpen(false)}>
                  <strong>{tool.name}</strong>
                  <span>{tool.description}</span>
                </Link>
              ))}

              {results.length === 0 && <p>No tools found.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}