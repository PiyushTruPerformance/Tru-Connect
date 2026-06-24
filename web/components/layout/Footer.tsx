export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white/90">
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} TRU Connect. Built for production.
      </div>
    </footer>
  );
}
