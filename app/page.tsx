import Link from "next/link";

const tools = [
  {
    name: "JSON Formatter",
    desc: "Format, validate and beautify your JSON data",
    icon: "📄",
    href: "/tools/json",
    color: "green",
  },
  {
    name: "Base64 Encode / Decode",
    desc: "Encode and decode Base64 strings easily",
    icon: "🔐",
    href: "#",
    color: "blue",
  },
  {
    name: "UUID Generator",
    desc: "Generate UUID v4 identifiers instantly",
    icon: "ID",
    href: "#",
    color: "orange",
  },
  {
    name: "QR Code Generator",
    desc: "Create custom QR codes for any content",
    icon: "▦",
    href: "#",
    color: "purple",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="navbar">
        <div className="brand">
          <div className="logo">U</div>
          <span>UniToolsHub</span>
        </div>

        <div className="nav-links">
          <a className="active">Home</a>
          <a>All Tools</a>
          <a>Categories</a>
          <a>About</a>
          <a>Contact</a>
        </div>

        <button className="theme-btn">☼</button>
      </nav>

      <section className="hero">
        <div className="blur blur-left" />
        <div className="blur blur-right" />

        <div className="badge">🌐 100% Free · No Login · Works in All Countries</div>

        <h1>
          One Hub. Unlimited Tools.
          <br />
          <span>Fast. Free. Global.</span>
        </h1>

        <p>
          A collection of free online tools for developers, designers, students
          and everyone. Simple, fast and privacy-friendly.
        </p>

        <div className="search-box">🔍 Search tools... <kbd>⌘ K</kbd></div>

        <div className="features">
          <span>⚡ Fast & Easy</span>
          <span>🔒 Privacy Focused</span>
          <span>♡ Always Free</span>
          <span>🌍 Global Access</span>
        </div>
      </section>

      <section className="tools-section">
        <div className="section-title">
          <h2>✨ Popular Tools</h2>
          <a>View all tools →</a>
        </div>

        <div className="tool-grid">
          {tools.map((tool) => (
            <Link className="tool-card" href={tool.href} key={tool.name}>
              <div className={`tool-icon ${tool.color}`}>{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.desc}</p>
              <button>Try Now →</button>
            </Link>
          ))}
        </div>
      </section>

      <section className="stats">
        <div>🚀 <strong>10+</strong><span>Useful Tools</span></div>
        <div>🌐 <strong>180+</strong><span>Countries</span></div>
        <div>🛡 <strong>100%</strong><span>Free to Use</span></div>
        <div>⚡ <strong>99.9%</strong><span>Uptime</span></div>
      </section>
    </main>
  );
}