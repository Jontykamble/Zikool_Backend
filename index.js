const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")
const cors = require('cors');


// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-with,Content-Type,Accept"
//   );
//   next();


// })
app.use(cors());

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World! update')
})
app.use("/abcd",(req,res)=>{
  res.send("Hello , its a new route")
})
const Displaydata = require('./routes/Displaydata');
app.use('/api',require("./routes/CreateUser"))
app.use('/api',require("./routes/Displaydata"))
// app.use('/jk',require("./abc"))
// app.get("/a1",(req,res)=>{
//   res.send("Working");
// })

app.listen(process.env.PORT || 5001, () => {
  console.log(`Example app listening on port 5001`)
})