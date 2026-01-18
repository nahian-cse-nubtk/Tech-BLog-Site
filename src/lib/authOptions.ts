import { retriveUser } from "@/actions/server";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { userCollection } from "./dbconnect";
import { NextAuthOptions, User, Account } from "next-auth";
export const authOptions:NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [

    // ...add more providers here
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
         email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
        if (!credentials) return null;
      // Add logic here to look up the user from the credentials supplied
      const user = await retriveUser(credentials)

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
  async signIn({
  user,
  account,
}: {
  user: User ;
  account: Account | null;
  email?: { verificationRequest?: boolean };

}) {
  if (!account) return false; // safety

  // check if user already exists
  if (!user.email) return false;
  const isExist = await userCollection.findOne({
    email: user.email,
    provider: account.provider,
  });

  if (isExist) return true;

  const newUser = {
    provider: account.provider,
    name: user.name ?? "Unknown",
    email: user.email,
    image: user.image ?? null,
    role: "user",
  };

  const result = await userCollection.insertOne(newUser);

  return result.acknowledged;
},
  async redirect({ url, baseUrl}) {
     if (url.startsWith("/")) return `${baseUrl}${url}`;
    // allow same-origin URLs
    if (new URL(url).origin === baseUrl) return url;
    return baseUrl
},
  async session({ session }) {
    return session
  },
  async jwt({ token}) {
    return token
  }
}
}