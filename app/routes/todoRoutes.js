const express = require('express');
const router = express.Router();
const todo = []

router.get('/', (req, res) => {
    res.status(200).json({ message: 'This is data from the todo API', todo, success: true});
});

router.get('/:id', (req, res) => {
    const id = req.body.id;
    console.log('ID is:',id);
    res.status(200).json({ message: 'This is data from todo API', todo ,Id: Id, success: true});
});

router.post('/', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    console.log('Todo is:',todos)    
    res.status(200).json({ message: 'This is data from the title API', data: todos[todos.length -1] , success: true});});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID is:',id);
    res.status(200).json({ message: 'This is data from todo API', todo, Id: Id, success: true});
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID is:',id);
    res.status(200).json({ message: 'This is data from todo API', todo, Id: Id, success: true});
});

module.exports = router;