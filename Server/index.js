const express = require("express");
const dotenv = require("dotenv");
const { Mongoose } = require("mongoose");
dotenv.config();
const app = express();
const PORT =  5000||process.env.PORT;
app.use(express.json())
app.use(require("./Routes/Hireme"));

if(process.env.NODE_ENV == "production"){
  app.use(express.static("frontend/build"))
  const path = require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server Running ${PORT}`);
});

