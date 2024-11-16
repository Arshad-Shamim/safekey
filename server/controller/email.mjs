import { emailFromat,sendMail } from './emailHelper.mjs';
import { storeToken,verifyEmail as updateStatus } from '../model/email.mjs';
import jwt from 'jsonwebtoken';


function sendEmail(req,res){
    try{
        const [emailBody,token]=emailFromat(req.body.email);
        const email = req.body.email;
        const subject = "Verify Your Email Address for Lock-It";
        const body=emailBody;
        const recevier = email;
        sendMail(recevier,subject,body);
        storeToken(email,token);
        res.end();
    }
    catch(err){
        console.log("cotroller/email/sendemail :",err);
        res.send("server error");
    }
}

function verifyEmail(req,res){     //this route verify user;
    const token = req.query.token;
    jwt.verify(token,"verification_link",async (err,email)=>{
        if(err){
            console.log("Invalid Email :",err);
        }
        else{
            let msg = await updateStatus(email.email);
            console.log("message :",msg);
        };
    });

    res.end();
}

export{sendEmail,verifyEmail};