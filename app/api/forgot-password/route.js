import ForgotPasswordTemplate from "@/emails/ForgotPasswordTemplate";
import { sendEmail } from "@/lib/email";
import { PrismaClient } from "@prisma/client";
import { render } from "@react-email/components";

const prisma = new PrismaClient()

export async function POST(req,res){
        try {
            const { email } = await req.json();
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })
            if(!user) return new Response(JSON.stringify({error: "A user with the email address you provided doesn't exist on our platform."}), { status: 404 })
    
            const { firstName, lastName } = user;
            
            let str = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^*()"
            let code = ""
            let randomIndex = ""
            for(let i=0;i<6;i++){
                randomIndex = Math.floor(Math.random() * str.length)
                code += str[randomIndex]
            }
            await sendEmail({
                to: email,
                subject: 'Reset Password',
                html: render(ForgotPasswordTemplate({firstName, lastName, code}))
            })
            
            return new Response(JSON.stringify({ code }), { status: 200 })
        } catch (error) {
            console.log(error.message)
        }
}