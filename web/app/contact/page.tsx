import { Container } from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <main className="py-20">
      <Container className="space-y-6">
        <div className="border border-zinc-200 bg-white p-10 shadow-sm">
          <h1 className="text-3xl font-semibold text-zinc-950">Contact</h1>
          <p className="mt-4 text-zinc-600">
            Reach out to the TRU Connect team for partnerships or support.
          </p>
        </div>
      </Container>
    </main>
  );
}
