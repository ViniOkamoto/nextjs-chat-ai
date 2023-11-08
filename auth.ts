import NextAuth, { DefaultSession, NextAuthConfig } from 'next-auth';
import Github from 'next-auth/providers/github';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

export const authOptions: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  pages: {
    signIn: '/sign-in',
  },
  providers: [

    Github({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
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
    async session({ session, user, token }) {

        if(token) {
          session.user.id = token.sub as string
          session.user.image = token.image as string
        }

        return session
    },

    async authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/") return !!auth
      return true
    },

  },
};

const { handlers: { GET, POST }, auth} = NextAuth(authOptions);
export { GET,  POST, auth};



