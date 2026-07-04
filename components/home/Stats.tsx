import { Rocket, Globe2, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { icon: Rocket, value: "10+", label: "Useful Tools" },
  { icon: Globe2, value: "180+", label: "Countries" },
  { icon: ShieldCheck, value: "100%", label: "Free to Use" },
  { icon: Zap, value: "99.9%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section className="stats">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div className="stat-item" key={item.label}>
            <Icon size={30} />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        );
      })}
    </section>
  );
}