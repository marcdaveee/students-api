// import the libraries
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const port = 8000;

//Initialize the Express App
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Starat the web server on port 8000
app.listen(port, () => {
  console.log(`App is listenting on port ${port}`);
});

// Get students end point
app.get("/students", async (req, res) => {
  try {
    const students = await axios.get(
      "https://json-server-40ay.onrender.com/students"
    );
    res.status(200).json(students.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Get students end point by id

app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const student = await axios.get(
      `https://json-server-40ay.onrender.com/students/${id}`
    );
    res.status(200).json(student.data);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

// Add students Endpoint

app.post("/students", async (req, res) => {
  try {
    const createdStudent = await axios.post(
      "https://json-server-40ay.onrender.com/students",
      req.body
    );
    res.status(201).json(createdStudent.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Update Student Endpoint
app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await axios.put(
      `https://json-server-40ay.onrender.com/students/${id}`,
      req.body
    );
    res.status(200).json(student.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// Delete Student Endpoint
app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await axios.delete(
      `https://json-server-40ay.onrender.com/students/${id}`
    );
    res.status(200).json(student.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
