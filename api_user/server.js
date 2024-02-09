const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

const users = [
    {id:1, username:'Dharmik', email :'dharmik@gmail.com' },
    {id:2, username:'Dhruvik', email :'dhruvik@gmail.com' },
    {id:3, username:'Urva', email :'urva@gmail.com' },
    {id:4, username:'Dinyanshu', email :'divyanshu@gmail.com' },
    {id:5, username:'Jeel', email :'jeel@gmail.com' },
    {id:2, username:'Parth', email :'parth@gmail.com' },
];

app.get('/users' , (req,res) => {
    return res.json(users);
})

app.listen(port, ()=>{
    console.log(`application is running on ${port}`);
})

