const express = require('express');
const router = express.Router();
const todos = [
    {
    "id": 1,
    "Make": "Nissan",
    "Model": "Skyline",
    "Year": "1998",
    "Hoersepower": "340hp",
    "Completed": true
},
{
    "id": 2,
    "Make": "Toyota",
    "Model": "Supra",
    "Year": "1997",
    "Hoersepower": "300hp",
    "Completed": true
},
{
    "id": 3,
    "Make": "Mazda",
    "Model": "RX-7",
    "Year": "2000",
    "Hoersepower": "310hp",
    "Completed": true
},
{
    "id": 4,
    "Make": "Audi",
    "Model": "R-8",
    "Year": "2008",
    "Hoersepower": "320hp",
    "Completed": true
}]; 

// Get all todos
router.get('/', (req, res) => {
console.log('GET ALL todos')
    res.status(200).json({ message: 'Get ALL succesful', data: todos, success: true});
});

// Get todo by id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('ID is:', id);

    const todo = todos.find(item => item.id === id);

    if (!todo) {
    return res.status(404).json({ 
        message: `Todo with ID ${id} not found`, 
        success: false
    });
}

    res.status(200).json({ 
    message: 'Get by Id successful', 
    id: id, 
    data: todo, 
    success: true
    });
});

// Post a new todo
router.post('/', (req, res) => {
    const todo = req.body;
    todos.push({id: todos.length + 1, ...todo});
    console.log('Todo is:', todos);
    res.status(200).json({ 
    message: 'Post successful', 
    data: todos[todos.length - 1], 
    success: true
});
});

// Update todo by id
router.put('/:id', (req, res) => {
const id = parseInt(req.params.id);
const updates = req.body;
console.log('ID is:', id);

const todoIndex = todos.findIndex(item => item.id === id);

if (todoIndex === -1) {
    return res.status(404).json({ 
        message: `Todo with ID ${id} not found`, 
        success: false
    });
}

todos[todoIndex] = {
    ...todos[todoIndex],
    ...updates,
    id: id 
};
res.status(200).json({ 
    message: 'Update successful', 
    id: id, 
    data: todos[todoIndex], 
    success: true
});
});

// Delete todo by id
router.delete('/:id', (req, res) => {
const id = parseInt(req.params.id);
console.log('ID is:', id);

const todoIndex = todos.findIndex(item => item.id === id);

if (todoIndex === -1) {
    return res.status(404).json({ 
        message: `Todo with ID ${id} not found`, 
        success: false
    });
}

res.status(200).json({ 
    message: 'Delete successful', 
    id: id, 
    data: todos[todoIndex], 
    success: true
});
});



// Assuming todos array is defined at the top of your file
// const todos = [];

// // Get all todos
// router.get('/', (req, res) => {
// if (todos.length === 0) {
//     return res.status(200).json({ 
//         message: 'No todos found', 
//         data: [], 
//         success: true
//     });
// }

// res.status(200).json({ 
//     message: 'Get ALL successful', 
//     data: todos,
//     count: todos.length,
//     success: true
// });
// });

// // Get todo by id
// router.get('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     console.log('ID is:', id);

//     const todo = todos.find(item => item.id === id);

//     if (!todo) {
//     return res.status(404).json({ 
//         message: `Todo with ID ${id} not found`, 
//         success: false
//     });
// }

//     res.status(200).json({ 
//     message: 'Get by Id successful', 
//     id: id, 
//     data: todo, 
//     success: true
//     });
// });

// // Post a new todo
// router.post('/', (req, res) => {
//     const todo = req.body;

//     if (!todo.title) {
//     return res.status(400).json({ 
//         message: 'Title is required', 
//         success: false
//     });
// }
//     const newTodo = {
//     id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
//     ...todo,
//     completed: todo.completed || false,
//     createdAt: new Date()
// };

// todos.push(newTodo);
// console.log('Todo is:', newTodo);

//     res.status(201).json({  
//     message: 'Post successful',
//     data: newTodo,
//     success: true 
// });
// });

// // Update todo by id
// router.put('/:id', (req, res) => {
// const id = parseInt(req.params.id);
// const updates = req.body;
// console.log('ID is:', id);

// const todoIndex = todos.findIndex(item => item.id === id);

// if (todoIndex === -1) {
//     return res.status(404).json({ 
//         message: `Todo with ID ${id} not found`, 
//         success: false
//     });
// }

//   // Update the todo
// todos[todoIndex] = {
//     ...todos[todoIndex],
//     ...updates,
//     id: id 
// };

// res.status(200).json({ 
//     message: 'Update successful', 
//     id: id, 
//     data: todos[todoIndex], 
//     success: true
// });
// });

// // Delete todo by id
// router.delete('/:id', (req, res) => {
// const id = parseInt(req.params.id);
// console.log('ID is:', id);

// const todoIndex = todos.findIndex(item => item.id === id);

// if (todoIndex === -1) {
//     return res.status(404).json({ 
//         message: `Todo with ID ${id} not found`, 
//         success: false
//     });
// }

// res.status(200).json({ 
//     message: 'Delete successful', 
//     id: id, 
//     data: deletedTodo, 
//     success: true
// });
// });

module.exports = router;