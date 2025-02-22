import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentias',
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials, req) {
                // console.log(credentials)
                try {
                    const res: any = await axios.post(`http://localhost:3005/user/login`, {
                        username: credentials?.username,
                        password: credentials?.password
                    });
                    // console.log(res.data)
                    return {
                        token: res.data.token,
                        id: res.data.user.id,
                        name: res.data.user.name,
                        email: res.data.user.email,
                        profile_photo_path: res.data.user.profile_photo_path,
                        username: res.data.user.username,
                    };
                } catch (error: any) {
                    console.log(error)
                    console.log(error.response)
                    return null;
                }
            },
        })
    ],
    pages: {
        signIn: '/',
    },
    callbacks: {
        async jwt({token, user}: {token: any, user: any}) {
            if (user) {
                token.user = user;
                token.token = user.token;
            }
            return token;
        },
        async session({session, token}: {token: any, session: any}) {
            if (token?.user) {
                session.user = token.user as any;
                session.token = token.token as string;
              }
              return session;
        }
    }
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions}