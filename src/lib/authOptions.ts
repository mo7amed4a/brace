import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from "jwt-decode";
import AxiosApp from './axios';

export type UserType = {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  user_category: string;
  is_accepted: boolean;
  profile_image: string;
};

export type SessionType = {
  user: UserType;
  expires: string;
  token: string;
}
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
            const user: {token: string, refresh_token: string, expires_at: string, user_category: string}= {
              token: "",
              refresh_token: "",
              expires_at: "",
              user_category: "",
            };
            user.token = res.data.token as string
            user.user_category = res.data.user_category as string
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
        token.token = user.token;
        token.user_category = user.user_category;
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
    session: async ({ session, token }: { session: any; token: any }) => {
      if (token) {
        const res = await AxiosApp.get("/user", {
          headers: {
            Authorization: token.token
          }
        }) 
        console.log("ssssssss auth oprion");
        

        session.token = token.token;
        session.user = res.data.user;

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