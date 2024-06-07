import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from "bcryptjs";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == "bm21btech11016@iith.ac.in") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    
    
  ],
  
};
