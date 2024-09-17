import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-dvh p-10">
      <main className="max-w-screen-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col rounded-xl">
        <div className="flex flex-col gap-2 mb-2">
          <h1 className="text-4xl font-bold">Nextjs Starter kit</h1>
        </div>
        <p className="mb-6">
          This is a starter template using Next.js, Drizzle, Shadcn, Tailwindcss
          and Authjs
        </p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Github Repo</Button>
        </div>
      </main>
    </div>
  );
}
