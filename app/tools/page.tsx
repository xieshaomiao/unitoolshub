import Link from "next/link";
import { tools } from "@/lib/tools";

export default function ToolsPage() {
  return (
    <main className="tool-list-page">
      <section className="tool-list-hero">
        <h1>All Tools</h1>
        <p>Browse all free online tools from UniToolsHub.</p>
      </section>

      <section className="all-tools-grid">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link href={tool.href} className="all-tool-card" key={tool.id}>
              <div className={`tool-icon ${tool.tone}`}>
                <Icon size={28} strokeWidth={2.4} />
              </div>

              <div>
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
                <span>{tool.category}</span>
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
}