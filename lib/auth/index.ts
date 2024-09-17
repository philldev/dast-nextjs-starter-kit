import NextAuth, { DefaultSession } from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
});

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      image: string;
    } & DefaultSession["user"];
  }
}
