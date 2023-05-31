import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectDB } from "@utils/database.js";

const googleProviderHandler = {
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};

const msg = { msg: "Connected" };

const handler = NextAuth({
  providers: [GoogleProvider(googleProviderHandler)],
  // @ts-ignore
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectDB();
      return msg;
    } catch (error) {
      console.log(error);
    }
  },
});
export default { handler };
