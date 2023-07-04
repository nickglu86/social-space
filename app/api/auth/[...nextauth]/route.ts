import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import Email from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
      adapter: PrismaAdapter(prisma),
      providers: [
            GithubProvider({  clientId: process.env.GITHUB_ID!, clientSecret: process.env.GITHUB_SECRET! }),
            GoogleProvider({  clientId: process.env.GOOGLE_ID!, clientSecret: process.env.GOOGLE_SECRET! }),
            TwitterProvider({ clientId: process.env.TWITTER_ID!, clientSecret: process.env.TWITTER_SECRET!, version: "2.0" }),
            FacebookProvider({ clientId: process.env.FACEBOOK_ID!,  clientSecret: process.env.FACEBOOK_SECRET!})
      ]
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}