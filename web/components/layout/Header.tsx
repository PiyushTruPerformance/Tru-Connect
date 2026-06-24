import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-zinc-950">
          {siteConfig.title}
        </Link>
        <nav className="flex items-center gap-4 text-sm text-zinc-600">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
