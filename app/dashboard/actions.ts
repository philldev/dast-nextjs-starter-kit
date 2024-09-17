"use server";

import { signOut as signOutAuth } from "@/lib/auth";

export async function signOut() {
  await signOutAuth({ redirectTo: "/" });
}
