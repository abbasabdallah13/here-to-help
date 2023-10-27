import { render } from '@react-email/render'
import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { sendEmail } from "@/lib/email";

export async function POST (req, res) {
    try {
                await sendEmail({
                    to: 'abbasab13@outlook.com',
                    subject: 'Welcome to Here to Help',
                    html: render(WelcomeTemplate())
                })
                return new Response(JSON.stringify({messge: 'success'}), { status: 200 })
    } catch (error) {
        console.log(error)
    }
}

