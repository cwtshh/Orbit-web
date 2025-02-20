import { API_URL } from "@/app/utils/constants";
import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Definir o tipo CustomUser
interface CustomUser {
  id: string;
  username: string;
  name: string;
  email: string;
  profile_photo_path?: string;
  accessToken: string;
}

// Extender tipos do NextAuth para incluir accessToken
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      id: string;
      username: string;
      name: string;
      email: string;
      profile_photo_path?: string;
    };
  }

  interface User {
    id: string;
    username: string;
    name: string;
    email: string;
    profile_photo_path?: string;
    accessToken: string;
  }
}

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Tipar a resposta da API
          const res = await axios.post(`${API_URL}/user/login`, {
            username: credentials?.username,
            password: credentials?.password,
          });

          // Verificando a resposta da API
          if (res.status === 200) {
            const user = res.data.user;

            return {
              id: user._id,
              username: user.username,
              email: user.email,
              profile_photo_path: user.profile_photo_path,
              accessToken: res.data.token,
            } as CustomUser;
          } else {
            throw new Error("Erro na autenticação");
          }
        } catch (error) {
          // Captura e exibe mensagens de erro
          if (axios.isAxiosError(error)) {
            const errorMessage =
              error.response?.data.message || "Erro desconhecido";
            throw new Error(errorMessage);
            console.error(errorMessage);
          }
          throw new Error("Erro na autenticação");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Aqui o token é estendido com os dados do usuário
        token.accessToken = user.accessToken;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user = token.user as CustomUser; // A tipagem é agora CustomUser
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(options);
