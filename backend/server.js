const express = require('express'); // rquire express
const mongoose = require('mongoose');
const app = express(); // we call express and assign it to a variable called app

// we are creating an instance of express and assigning all the functionalities that express has into our app vriable
// now that we have all the methods that express have given us, we then create our server using express

//connect to mongoose
mongoose.connect(dburl, {})

//Routes
//Users routes
//Register routes
app.post('/api/users/register', (req, res) => {
    res.send('Register route');

});
// login routes
app.post('/api/users/login', (req, res) => {
    res.send('Login route');
}); 

// Update user
app.put('/api/users/update', (req, res) =>{
         req.send('Update route');
      });

//Delete user
 app.delete('/api/users/:id', (req, res) => {
    res.send('Delete route');
 });

 //fetch users
 app.get('/api/users', (req, res) => {
    res.send('Fetch users');
 });
// server
const PORT = process.env.PORT || 5000  // simply means, if process.env.port is available, then use it. else use port 5000
app.listen(PORT, () => {      // listen takes two parameers the port number and he function to be executed
    console.log('server is up and running ' + PORT);
})