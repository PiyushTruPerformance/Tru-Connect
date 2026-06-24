import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="py-20">
      <Container className="space-y-6">
        <div className="border border-zinc-200 bg-white p-10 shadow-sm">
          <h1 className="text-3xl font-semibold text-zinc-950">
            About TRU Connect
          </h1>
          <p className="mt-4 text-zinc-600">
            This project is structured for production with reusable components,
            clear data and service layers, and strong TypeScript support.
          </p>
        </div>
      </Container>
    </main>
  );
}
