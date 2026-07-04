import { Code2, Type, Image, Palette, Shield, Calculator } from "lucide-react";

const categories = [
  { name: "Developer", count: "12 tools", icon: Code2 },
  { name: "Text", count: "8 tools", icon: Type },
  { name: "Image", count: "6 tools", icon: Image },
  { name: "Color", count: "5 tools", icon: Palette },
  { name: "Security", count: "7 tools", icon: Shield },
  { name: "Math", count: "4 tools", icon: Calculator },
];

export default function Categories() {
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
              <span>{item.count}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}