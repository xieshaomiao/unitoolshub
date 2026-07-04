import { FileJson2, Fingerprint, Lock, QrCode } from "lucide-react";

export const tools = [
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description: "Format, validate and beautify your JSON data.",
    href: "/tools/json",
    category: "Developer",
    icon: FileJson2,
    tone: "green",
    featured: true,
  },
  {
    id: "base64",
    name: "Base64 Encode / Decode",
    description: "Encode and decode Base64 strings easily.",
    href: "/tools/base64",
    category: "Developer",
    icon: Lock,
    tone: "blue",
    featured: true,
  },
  {
    id: "uuid-generator",
    name: "UUID Generator",
    description: "Generate UUID v4 identifiers instantly.",
    href: "/tools/uuid",
    category: "Generator",
    icon: Fingerprint,
    tone: "orange",
    featured: true,
  },
  {
    id: "qr-code-generator",
    name: "QR Code Generator",
    description: "Create custom QR codes for any content.",
    href: "#",
    category: "Generator",
    icon: QrCode,
    tone: "purple",
    featured: true,
  },
];