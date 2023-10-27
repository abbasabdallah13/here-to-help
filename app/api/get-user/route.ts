import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST (req: Request){
    try {
        const { email } = await req.json();
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        return new Response(JSON.stringify({user}), {status: 200})

    } catch (error) {
        console.log(error)
    }
}