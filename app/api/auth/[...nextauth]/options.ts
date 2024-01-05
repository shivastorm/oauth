import NextAuth, { NextAuthOptions } from 'next-auth'
import KeycloakProvider from "next-auth/providers/keycloak";
import logout from './logout';
export const options: NextAuthOptions = {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.KEYCLOAK_ID}`,
            clientSecret: `${process.env.KEYCLOAK_SECRET}`,
            issuer: `${process.env.KEYCLOAK_ISSUER}`,
            // profile(profile) {
            //     console.log('Keycloak Profile:======>', profile);
            //     return profile;
            //     // return {
            //     //     id: profile.sub, 
            //     //     name: profile.name,
            //     //     email: profile.email,
            //     // };
            // }
        }),

    ],
    pages: {
        //signIn: '/signin',
        // signOut: '/?logout=true'
    },
    callbacks: {
        async jwt({ token, account }: any) {
            if (account) {
                token.access_token = account.access_token;
            }
            // console.log("token",token.access_token)
            return token;
        }
        ,
        async session({ session, token, user }: any) {
            if (session) {
                session.access_token = token.access_token;
                return session;
            }
        }
    }
}

export default NextAuth(options)

// CredentialsProvider({
//     name: "Credentials",
//     credentials: {
//         username: {
//             label: "Username:",
//   

