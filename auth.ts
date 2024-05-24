import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "abcd@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          const existingUser = {
            id: 1,
            name: "User One",
            email: "user@gmail.com",
            password: "password",
          };

          // check if the password match
          if (email == credentials?.email) {
            const passwordMatch = credentials?.password.toString() == password;

            if (!passwordMatch) return null;
          }

          return {
            id: `${existingUser.id}`,
            name: existingUser.name,
            email: existingUser.email,
          };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
