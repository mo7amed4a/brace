import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from "jwt-decode";
import AxiosApp from './axios';

export const auth: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: 'login',
      name: 'login',
      credentials: {
        login: { label: 'Phone', type: 'text', placeholder: 'Enter Phone Number' },
        password: { label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        const dataLogin = {
          login: credentials?.login,
          password: credentials?.password
        };
        
        try {
          const res = await AxiosApp.post('/sign_in', dataLogin);
          if (res?.data?.status==="success") {
            const user: {token: string, refresh_token: string, expires_at: string}= {
              token: "",
              refresh_token: "",
              expires_at: ""
            };
            user.token = res.data.token as string
            // user.refresh_token = res.data.refresh_token as string
            // user.expires_at = res.data.expires_at as string
            return user as any;
          }
        } catch (e: any) {
          const errorMessage = e?.response?.data?.message ||  e?.message || 'Something went wrong!';
          throw new Error(errorMessage);
        }
      }
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        // When the user logs in, store token and other data in the JWT
        token.token = user.token;
        // token.refresh_token = user.refresh_token;
        // token.expires_at = user.expires_at;
        // token.note = user.note;
      }

      // Optional: Validate token expiration
      if (token.token) {
        const decoded = jwtDecode(token.token);
        if (decoded && (decoded.exp as number) < Date.now() / 1000) {
          console.log('Token is expired');
          // Optionally, handle token refresh here
          return {};
        }
      }

      return token;
    },
    session: ({ session, token }: { session: any; token: any }) => {
      if (token) {
        session.token = token.token;
        session.user = {
          // refresh_token: token.refresh_token,
          // expires_at: token.expires_at,
          note: token.note,
        };

        // Set session expiration based on expires_at
        if (token.expires_at) {
          // Assuming expires_at is a timestamp in seconds or an ISO date string
          const expiresAt = new Date(token.expires_at);
          if (!isNaN(expiresAt.getTime())) {
            session.expires = expiresAt.toISOString(); // Set session expiration
          }
        }
      }

      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET
  },
  pages: {
    signIn: '/login',
    // newUser: '/register'
  }
};