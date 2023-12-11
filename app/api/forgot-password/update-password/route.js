import { PrismaClient } from "@prisma/client"
import { sendEmail } from "@/lib/email";
import { render } from "@react-email/components"
import SuccessfulPasswordChangeTemplate from "@/emails/SuccessfulPasswordChangeTemplate";
import bcrypt from 'bcrypt'


const prisma = new PrismaClient()
const saltRounds = 10

export async function POST(req,res){
    const { email, password, confirmPassword } = await req.json()

    if(password.length < 8) return new Response(JSON.stringify({message:'Password should be at least 8 characters'}), { status: 400 })
    if(password !== confirmPassword) return new Response(JSON.stringify({message: 'Passwords do not match'}), { status: 400 })
    
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.update({
        where: {
            email
        },
        data: {
            password: encryptedPassword
        }
    })

    await sendEmail({
        to: email,
        subject: 'Your password has been successfully updated',
        html: render(SuccessfulPasswordChangeTemplate({firstName: user.firstName, lastName:user.lastName}))
    })
    return new Response(JSON.stringify({user, message: 'updated'}), { status: 200 })


    

}