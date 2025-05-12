"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Dashboard", href: "/pages/user/dashboard" },
  { label: "Start Donation", href: "/pages/user/start-donation" },
  { label: "Donation History", href: "/pages/user/donation-history" },
  { label: "My Profile", href: "/pages/user/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href) => pathname == href;

  return (
    <aside className="w-64 bg-blue-950 text-white p-6 space-y-6">
      <div className="text-3xl text-purple-100 font-bold">DaanMitra</div>
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive(link.href)
                ? "bg-purple-100 text-purple-950 font-semibold "
                : "hover:bg-blue-900"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
