import { sendEmail } from '@/lib/email';
import { PrismaClient } from '@prisma/client'
import { render } from '@react-email/render'
import WelcomeTemplate from '@/emails/WelcomeTemplate'
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()
const saltRounds = 10;

export async function POST(req: Request){
    try {
        const { userDetails: { firstName, lastName, email, gender, password, confirmPassword } } = await req.json()
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) return new Response(JSON.stringify({message: 'A user with this email already exists'}), { status: 200 })

        if(password.length < 8) return new Response(JSON.stringify({message:'Password should be at least 8 characters'}), { status: 200 })
        if(password !== confirmPassword) return new Response(JSON.stringify({message: 'Passwords do not match'}), { status: 200 })
        
        const encryptedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await prisma.user.create({
            data: {
                firstName, lastName, email, gender, password: encryptedPassword
            }
        })
        
        await sendEmail({
            to: email,
            subject: 'Welcome to Here to Help',
            html: render(WelcomeTemplate({firstName, lastName}))
        })
        
        return new Response(JSON.stringify({newUser}), { status: 200 })
    
    } catch (error) {
        console.log(error)
    }
}