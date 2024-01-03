import type { NextAuthOptions } from 'next-auth'
import KeycloakProvider from "next-auth/providers/keycloak";
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions= {
    providers: [
        KeycloakProvider({
            clientId: `${process.env.KEYCLOAK_ID}`,
            clientSecret: `${process.env.KEYCLOAK_SECRET}`,
            issuer: `${process.env.KEYCLOAK_ISSUER}`,
        }),
        // CredentialsProvider({
        //     name: "Credentials",
        //     credentials: {
        //         username: {
        //             label: "Username:",
        //             type: "text",
        //             placeholder: "your username"
        //         },
        //         password: {
        //             label: "Password:",
        //             type: "password",
        //             placeholder: "your password"
        //         }
        //     },

        //     async authorize(credentials, req) {

        //         // This is where you need to retrieve user data 
        //         // to verify with credentials
        //         // Docs: https://next-auth.js.org/configuration/providers/credentials
            
        //     console.log("console=>",credentials);
        //         const user = {
        //             id: "42",
        //             name: "siva",
        //             password: "nextauth"
        //         }

        //         if (credentials?.username === user.name && credentials?.password === user.password) {
        //             return user
        //         } else {
        //             return null
        //         }
        //     }
        // })
    ],
 
    // callbacks: {
    //     async jwt({ token, account }) {
    //       const nowTimeStamp = Math.floor(Date.now() / 1000);

    //       if (account) {
    //         // account is only available the first time this callback is called on a new session (after the user signs in)
    //         token.decoded = jwt_decode(account.access_token);
    //         token.access_token = account.access_token;
    //         token.id_token = account.id_token;
    //         token.expires_at = account.expires_at;
    //         token.refresh_token = account.refresh_token;
    //         return token;
    //       } else if (nowTimeStamp < token.expires_at) {
    //         // token has not expired yet, return it
    //         return token;
    //       } else {
    //         // token is expired, try to refresh it
    //         console.log("Token has expired. Will refresh...")
    //         try {
    //           const refreshedToken = await refreshAccessToken(token);
    //           console.log("Token is refreshed.")
    //           return refreshedToken;
    //         } catch (error) {
    //           console.error("Error refreshing access token", error);
    //           return { ...token, error: "RefreshAccessTokenError" };
    //         }
    //       }
    //     },
    //     async session({ session, token }) {
    //       // Send properties to the client
    //       session.access_token = encrypt(token.access_token); // see utils/sessionTokenAccessor.js
    //       session.id_token = encrypt(token.id_token);  // see utils/sessionTokenAccessor.js
    //       session.roles = token.decoded.realm_access.roles;
    //       session.error = token.error;      
    //       return session;
    //     },
    //   },
    // };
}