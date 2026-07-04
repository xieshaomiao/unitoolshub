import Link from "next/link";
import { FileCode2, Lock, Fingerprint, QrCode } from "lucide-react";

const tools = [
  {
    name: "JSON Formatter",
    desc: "Format, validate and beautify your JSON data",
    href: "/tools/json",
    icon: FileCode2,
    tone: "green",
  },
  {
    name: "Base64 Encode / Decode",
    desc: "Encode and decode Base64 strings easily",
    href: "#",
    icon: Lock,
    tone: "blue",
  },
  {
    name: "UUID Generator",
    desc: "Generate UUID v4 identifiers instantly",
    href: "#",
    icon: Fingerprint,
    tone: "orange",
  },
  {
    name: "QR Code Generator",
    desc: "Create custom QR codes for any content",
    href: "#",
    icon: QrCode,
    tone: "purple",
  },
];

export default function ToolGrid() {
  return (
    <section className="tools-section">
      <div className="section-title">
        <h2>✨ Popular Tools</h2>
        <a>View all tools →</a>
      </div>

      <div className="tool-grid">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link className="tool-card" href={tool.href} key={tool.name}>
              <div className={`tool-icon ${tool.tone}`}>
                <Icon size={30} strokeWidth={2.4} />
              </div>

              <h3>{tool.name}</h3>
              <p>{tool.desc}</p>

              <button>Try Now →</button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}