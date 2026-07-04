import Link from "next/link";
import { Search, Moon, Wrench } from "lucide-react";

const menus = [
  { title: "Home", href: "/" },
  { title: "Tools", href: "#" },
  { title: "Categories", href: "#" },
  { title: "About", href: "#" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="brand">
          <div className="brand-logo">
            <Wrench size={20} strokeWidth={2.5} />
          </div>

          <div className="brand-text">
            <strong>UniToolsHub</strong>
            <span>Developer Tools</span>
          </div>
        </Link>

        <nav className="navbar-menu">
          {menus.map((item) => (
            <Link key={item.title} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="icon-button">
            <Search size={18} />
          </button>

          <button className="icon-button">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}