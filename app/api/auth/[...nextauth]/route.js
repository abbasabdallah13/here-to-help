import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "@/lib/email";
import { render } from '@react-email/render'
import WelcomeTemplateWithProvider from "@/emails/WelcomeTemplateWithProvider";

const prisma = new PrismaClient();

const handler = NextAuth({
    providers: [
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            httpOptions: {
              timeout: 40000,
            },
          }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          })
        // ...add more providers here
      ],
      callbacks: {
        async session({ session }){
          const sessionUser = await prisma.user.findUnique({
            where: {
              email: session?.user.email
            }
          })
          session.user.id = sessionUser.id;
          return session;
        },
        async signIn({ user, account, profile }){
          const existingUser = await prisma.user.findUnique({
            where: {
              email: profile.email
            }
          })
          if(!existingUser){
            const newUser = await prisma.user.create({
              data: {
                firstName: profile.name.split(' ')[0],
                lastName: profile.name.split(' ')[1],
                email: profile.email,
                gender: '',
                password: ''
              }
            })
            await sendEmail({
              to: profile?.email,
              subject: 'Here to Help - Registration',
              html: render(WelcomeTemplateWithProvider({name: user?.name, provider: account?.provider}))
            })
          }
          return true
        }
      },

})

export { handler as GET, handler as POST }