import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

function credential() {
  const clientId = process.env.GITHUB_ID;
  const clientSecret = process.env.GITHUB_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Something is wrong with id and secret");
  }
  return { clientId, clientSecret };
}

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: credential().clientId,
      clientSecret: credential().clientSecret,
    }),
  ],
});

export { handler as GET, handler as POST };
