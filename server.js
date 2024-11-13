const express = require("express");
const app = express();

const PORT = 3000;

const employees = require("./employees.js");

app.get("/", (req,res) => {
  res.send("Hello employees!");
})

app.get("/employees/random", (req,res) => {
  const min = 0;
  const max = employees.length;
  const randomEmployee = Math.floor(Math.random() * (max - min));
  res.json(employees[randomEmployee].name);
})

app.get("/employees", (req,res) => {
  res.json(employees.map((employee) => {
    return employee.name
  }))
})

app.get("/employees/:id", (req,res) => {
  const { id } = req.params;
  if (id < 0 || id >= employees.length) {
    res.status(404).send("Employee doesn't exist");
  } else {
    res.json(employees[id].name);
  }
})


app.listen(PORT)