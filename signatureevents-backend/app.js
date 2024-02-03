const express = require('express');
const bodyParser = require('body-parser');

const cors = require("cors");
const app = express();
const PORT = 3200;
const { sendMail } = require("./utils");

let corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));
app.options("*", cors());

app.get('/',(req,res)=>{
  res.send("Welcome to Signature events!")
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contactDetails',(req,res) => {

    if (req.body.name === undefined) {
        const error = new Error("name cannot be empty!");
        error.statusCode = 400;
        throw error;
    } else if (req.body.email === undefined) {
        const error = new Error("email cannot be empty!");
        error.statusCode = 400;
        throw error;
    }  else  if (req.body.service === undefined) {
        const error = new Error("service cannot be empty!");
        error.statusCode = 400;
        throw error;
    } else if (req.body.budget === undefined) {
        const error = new Error("budget cannot be empty!");
        error.statusCode = 400;
        throw error;
    }  else if(req.body.message === undefined ){
        const error = new Error("message cannot be empty!");
        error.statusCode = 400;
        throw error;
    }
    sendMail(req.body)
    res.send({data:"Sending Mail.."})
})

app.post('/submitForm',(req,res) => {

  if (req.body.fullName === undefined) {
    const error = new Error("fullName cannot be empty!");
    error.statusCode = 400;
    throw error;
  } else if (req.body.mobileNumber === undefined) {
    const error = new Error("mobileNumber cannot be empty!");
    error.statusCode = 400;
    throw error;
  }  
  sendMail(req.body)
  res.send({data:"Sending Mail.."})
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

