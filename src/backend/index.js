import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
    

mongoose.connect("mongodb+srv://dhruv:dhruv@cluster0.eav5fip.mongodb.net/Child_Vaccination?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})
const userSchema = new mongoose.Schema({
    Name: String,
    Mobile_no: Number,
    Email: String,
    password: String,
    reEnterpassword: String
})

const User = new mongoose.model("User", userSchema)

/* app.get("/",(req,res)=>{
    res.send("My API")
})
 */


app.listen(9000, () => {
    console.log("Port 9000");
})

app.post("/ParentLogin", (req, res) => {
    const {Email,password}=req.body
    User.findOne({Email:Email},(err,user)=>{
        if(user){
            if(password === user.password)
            {
                res.send({message:"Login Successfull",user:user})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"User Not registered"})
        }
    })
    // res.send("Login Page")
})
app.post("/ParentReg", (req, res) => {
    const { Name, Mobile_no, Email, password } = req.body
    User.findOne({ Email: Email }, ( err, user ) => {
        if(user) {
            res.send({ message: "User already registered" })
        }
        else{
            const user = new User({
                Name,
                Mobile_no,
                Email,
                password
            })
            
            user.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "Successfully registered" })
                }
            })
        }
    })
    // res.send("Register Page")
})