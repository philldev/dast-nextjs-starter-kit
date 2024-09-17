import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { signOut } from "./actions";

export default async function Dashboard() {
  const session = await auth();

  if (!session) redirect("/login");

  const {
    user: { name },
  } = session;

  return (
    <div className="min-h-dvh">
      <main className="max-w-screen-lg mx-auto w-full p-4 lg:py-10">
        <h1 className="text-4xl mb-4 font-bold">Dashboard</h1>
        <p className="mb-4">Welcome, {name}!</p>
        <form action={signOut} className="flex gap-4 mb-2">
          <Button type="submit">Sign out</Button>
        </form>
      </main>
    </div>
  );
}
