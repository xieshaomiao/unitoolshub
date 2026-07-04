import Link from "next/link";

export default function Home() {
  const tools = [
    {
      name: "JSON Formatter",
      icon: "🧾",
      href: "/tools/json",
    },
    {
      name: "Base64 Encode / Decode",
      icon: "🔐",
      href: "#",
    },
    {
      name: "UUID Generator",
      icon: "🆔",
      href: "#",
    },
    {
      name: "QR Code Generator",
      icon: "📱",
      href: "#",
    },
  ];

  return (
    <main
      style={{
        padding: "60px",
        fontFamily: "sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <header>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          UniToolsHub
        </h1>

        <p style={{ fontSize: "18px", color: "#666" }}>
          One Hub. Unlimited Tools. Fast. Free. Global.
        </p>
      </header>

      <section style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "28px" }}>Tools</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  border: "1px solid #eee",
                  borderRadius: "12px",
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "24px" }}>{tool.icon}</div>

                <div
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {tool.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}