import Link from "next/link";
import { tools } from "@/lib/tools";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ToolGrid() {
  return (
    <section className="tools-section">
      <div className="section-title">
        <h2>✨ Popular Tools</h2>
        <a href="#">View all tools →</a>
      </div>

      <div className="tool-grid">
        {tools
          .filter((tool) => tool.featured)
          .map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                href={tool.href}
                key={tool.id}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card className="tool-card">
                  <div className={`tool-icon ${tool.tone}`}>
                    <Icon size={30} strokeWidth={2.4} />
                  </div>

                  <h3>{tool.name}</h3>

                  <p>{tool.description}</p>

                  <Button variant="secondary">
                    Try Now →
                  </Button>
                </Card>
              </Link>
            );
          })}
      </div>
    </section>
  );
}