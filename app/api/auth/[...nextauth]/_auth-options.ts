import NextAuth, { DefaultSession, NextAuthConfig } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { googleOnTapAuthorize } from './_google-on-tap-authorize';
import { authProviders } from '@/lib/contants';


declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}


export const authOptions: NextAuthConfig = {
  secret: process.env.AUTH_SECRET as string,
  pages: {
    signIn: '/sign-in',
  },
  debug: true,
  providers: [
    GithubProvider({
      id: authProviders[0].id,
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      id: authProviders[1].id,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialProvider({
      id: "googleonetap",
      name: "google-one-tap",
      credentials: {
        credential: { type: "text" },
      },
    
      authorize: googleOnTapAuthorize,

    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.id = profile.sub
        token.image = profile.image
      }
      return token
    },
    async session({ session, token }) {

        if(token) {
          session.user.id = token.sub as string
          session.user.image = token.image as string
        }
        return session
    },

    async authorized({ auth }) {

      return !!auth;
    },

  },
};

const { handlers: { GET, POST }, auth} = NextAuth(authOptions);
export { GET,  POST, auth};



