import axios from 'axios';

//till now this for send varification email to user;
function varifyEmail(email){
    axios.post("http://localhost:2000/email/varify",{email}).
    then((req,res)=>{
        console.log(res.data);
    }).
    then((err)=>{
        console.log(err);
    })
};

export {varifyEmail}