import NextAuth, { NextAuthOptions } from "next-auth"
import Github, { GithubProfile } from "next-auth/providers/github"

const options: NextAuthOptions = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }) // Ensure you provide the necessary options
    ]
}

export const { handlers, signIn, signOut, auth } = NextAuth(options)
