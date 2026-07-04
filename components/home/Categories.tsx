import { Code2, Fingerprint } from "lucide-react";
import { tools } from "@/lib/tools";

const categoryIcons = {
  Developer: Code2,
  Generator: Fingerprint,
};

export default function Categories() {
  const categories = Array.from(
    new Map(
      tools.map((tool) => [
        tool.category,
        {
          name: tool.category,
          count: tools.filter((item) => item.category === tool.category).length,
          icon: categoryIcons[tool.category as keyof typeof categoryIcons] || Code2,
        },
      ])
    ).values()
  );

  return (
    <section className="categories-section">
      <div className="section-title">
        <h2>Browse by Category</h2>
        <a>Explore all →</a>
      </div>

      <div className="category-grid">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div className="category-card" key={item.name}>
              <Icon size={28} />
              <strong>{item.name}</strong>
              <span>{item.count} tools</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}