import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh">
      <header className="max-w-screen-lg px-4 mx-auto flex w-full items-center py-4">
        <div>
          <Link href="/" className="font-bold">
            Acme
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-end">
          <Button size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>
      <main className="max-w-screen-lg mx-auto w-full p-4">
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
