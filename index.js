const express=require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("thank this");
})
app.listen(3000,()=>console.log('listening to port 3000'));