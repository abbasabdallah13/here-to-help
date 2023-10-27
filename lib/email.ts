import nodemailer from 'nodemailer'

type EmailPayload = {
    to: string,
    subject: string,
    html: string    
}

const smtpOptions = {
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASS
    }
}

export const sendEmail = async(data: EmailPayload) => {
    const transporter = nodemailer.createTransport({...smtpOptions});

    return await transporter.sendMail({
        from: {
            name: 'Here to Help',
            address: 'heretohelp883@gmail.com'   
        }, ...data
    }, (err, info) => {
        if(err){
            console.log(err)
        }else{
            return true;
        }
    })
}