require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

//  Middleware to parse JSON requests
app.use(express.json());

// IN MEMORY DATA STORE
let tasks = [
  { id: 1, title: 'Sample Task 1', description: "Sample Description 1", status: "Pending" },
  { id: 2, title: 'Sample Task 2', description: "Sample Description 2", status: "Completed" },
  { id: 3, title: 'Sample Task 3', description: "Sample Description 3", status: "Pending" },
  { id: 4, title: 'Sample Task 4', description: "Sample Description 4", status: "Pending" },
  { id: 5, title: 'Sample Task 5', description: "Sample Description 5", status: "Completed" },
];


// ROUTES - API ENDPOINTS
// INDEX PAGE AND GET ALL TASKS
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Task Management API');
});

app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});


// GET COMPLETED TASKS
app.get('/tasks/completed', (req, res) => {
  const completedTasks = tasks.filter(t => t.status === "Completed");
  res.status(200).json(completedTasks);
});

// GET PENDING TASKS
app.get('/tasks/pending', (req, res) => {
  const pendingTasks = tasks.filter(t => t.status === "Pending");
  res.status(200).json(pendingTasks);
});


// GET A SINGLE TASK BY ID
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// CREATE A NEW TASK
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || "Pending"
  };
  // Validate request body - check for missing fields
  if (!newTask.title || !newTask.description) {
    return res.status(400).json({ message: 'Title and description are required' });
  };

  // Check if a task with the same title already exists
  const existingTask = tasks.find(t => t.title === newTask.title);
  const existingstatus = tasks.find(t => t.status === newTask.status);
  if (existingTask && existingstatus) {
    return res.status(409).json({ message: 'Task already exists' });
  }

  tasks.push(newTask);
  res.status(201).json(newTask);
});






// STARTING THE SERVER
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});