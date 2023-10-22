import { PrismaClient } from "@prisma/client";
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

export const POST = async(req: Request) => {
    try {
        const { userInput: {email, password} } = await req.json();
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if (!user) return new Response(JSON.stringify({message: 'A user with this email is not registered', user:null}), { status: 200 });
        if(await bcrypt.compare(password, user.password) === false) return new Response(JSON.stringify({message: 'Incorrect password', user:null}), { status: 200 });
        return new Response(JSON.stringify({user, message: null}), { status:200 })

    } catch (error) {
        console.log(error)
    }
}