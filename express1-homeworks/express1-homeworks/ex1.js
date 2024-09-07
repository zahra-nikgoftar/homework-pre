/*
1- Use npm to install the express package, which is a web framework for building server-side applications in Node.js.

2- Write code to import the express package into your program.

3- Initialize an Express application by calling express() and store it in a variable named app.

4- Set Up a Route to Retrieve All Users: Create a GET route at /users that responds with a list of users

5- Set Up a Route to Retrieve a User by ID: Create a GET route at /users/:id that extracts the id parameter from the request. Search the users array for a user with the matching id and return the user if found. If no user is found, return a "user not found" message.

5- Create a route that matches any undefined paths using app.use("*", ...). This route should respond with a "not found" message.

6- Set the application to listen on port 3000 

*/

const users = [
  {
    id: 1,
    username: "johndoe",
    email: "johndoe@example.com",
    password: "password123",
    job: "Software Engineer",
  },
  {
    id: 2,
    username: "janesmith",
    email: "janesmith@example.com",
    password: "securePass456",
    job: "Product Manager",
  },
  {
    id: 3,
    username: "mikejohnson",
    email: "mikejohnson@example.com",
    password: "qwerty789",
    job: "Data Analyst",
  },
  {
    id: 4,
    username: "emilybrown",
    email: "emilybrown@example.com",
    password: "pass9876",
    job: "UX Designer",
  },
  {
    id: 5,
    username: "davemiller",
    email: "davemiller@example.com",
    password: "abc123xyz",
    job: "DevOps Engineer",
  },
];

//Answer


const express = require("express");
const app = express();



app.get('/users',(req,res)=>{
res.send(users)
})

app.get('/users/:id', (req, res) => {  
  console.log(res.params);
  const parsedId = parseInt(req.params.id)
  if(isNaN(parsedId)) return res.status(400).send({msg:"user not found"});
  const findUser = users.find((user)=>user.id === parsedId);
  if(!findUser) return res.status(404);
  return res.send(findUser); 
});


app.use("*", (req, res) => {
  res.send("Not found");
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

