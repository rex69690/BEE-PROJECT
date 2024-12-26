const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./student.js');

const app = express();
const PORT = 3000;

//connecting mongoDb to the node js
mongoose.connect('mongodb://localhost:27017/data', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('frontend'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/frontend/index.html');
});
app.get("/about" , (request , response)=>{
  response.end("<h1>this is about page </h1>");
})

// Registration for student 
app.post('/api/register', async (request, response) => {
  console.log(request.body); 
  const { name, email, rollNumber, course, phone, dob, gender, yearOfStudy, semester } = request.body;
  
  // Create a new student object with the additional parameters
  const student = new Student({ 
    name, 
    email, 
    rollNumber, 
    course, 
    phone, 
    dob, 
    gender, 
    yearOfStudy, 
    semester 
  });

  student.save()
  .then(()=>{
    console.log("student registered");
  })
  .catch(err =>{
    console.error("cant register");
  })
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});