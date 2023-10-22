import { PrismaClient } from '@prisma/client'
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
        if(!existingUser){
            if(password.length < 8) return new Response(JSON.stringify({message:'Password should be at least 8 characters'}), { status: 200 })
            if(password !== confirmPassword) return new Response(JSON.stringify({message: 'Passwords do not match'}), { status: 200 })
            const encryptedPassword = await bcrypt.hash(password, saltRounds);
            const newUser = await prisma.user.create({
                data: {
                    firstName, lastName, email, gender, password: encryptedPassword
                }
            })
            return new Response(JSON.stringify({newUser}), { status: 200 })
        }else{
            return new Response(JSON.stringify({message: 'A user with this email already exists'}), { status: 200 })        }
    } catch (error) {
        console.log(error)
    }
}