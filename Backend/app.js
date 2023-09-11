const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
const port = process.env.PORT;


const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const Profile = require('./models/profileSchema');


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/',(req,res)=>{
        res.send("Hello world")
})

//register

app.post('/register', async(req, res)=>{
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const comfirm_password = req.body.comfirm_password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password,
            comfirm_password : comfirm_password

        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send('Registerd')
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})


//login

app.post('/login',async(req,res)=>{
    try {
        const email= req.body.email;
        const password =req.body.password;

        const user= await Users.findOne({email:email})
        if(user){
            const isMatch =await bcryptjs.compare(password,user.password);

            if(isMatch){
                const token =await user.generateToken();
                res.cookie("jwt",token,{
                    expires:new Date(Date.now() + 86400000),
                    httpOnly:true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid credentials")
            }
        }else{
            res.status(400).send("Invalid credentials")
        }
    } catch (error) {
        res.status(400).send(error);
    }
})


//Message

app.post('/message', async(req, res)=>{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        

        const sendMsg = new Message({
            name : name,
            email : email,
            message : message,
            
        });

        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send('Send Message')
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})

//Profile


app.post('/profile', async(req, res)=>{
    try {
        const fristname = req.body.fristname;
        const lastname = req.body.lastname;
        const Address = req.body.Address;
        const Dateofbirth = req.body.Dateofbirth;
        const gender=req.body.gender;
        const city=req.body.city;
        const contact=req.body.contact;

        const createprofile = new Profile({
            fristname : fristname,
            lastname : lastname,
            Address : Address,
            Dateofbirth : Dateofbirth,
            gender:gender,
            city:city,
            contact:contact

        });

        const created = await createprofile.save();
        console.log(created);
        res.status(200).send('sent')
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})


//logout

app.get('/logout',(req,res)=>{
    res.clearCookie("jwt",{path:'/'})
    res.status(200).send("User Logged Out")
})


app.listen(port,()=>{
    console.log("Server is listening")
})