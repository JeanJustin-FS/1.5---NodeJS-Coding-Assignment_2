const express = require('express');
const router = express.Router();

const titles = []

// get all titles
router.get('/', (req, res) => {
    res.status(200).json({ message: 'This is data from the title API', success: true});
});

// get title by id
router.get('/:id', (req, res) => {
    const id = req.params.id; 
    console.log('ID is:', id);
    res.status(200).json({ message: 'This is data from title API', id: id, data: titles, success: true});
});

// post a new title
router.post('/', (req, res) => {
    const title = req.body;
    todos.push({id: titles.length + 1, ...title});
    console.log('Title is:', titles);
    res.status(200).json({ 
    message: 'This is data from the title API', 
    data: titles[titles.length - 1], 
    success: true
});
});

// update title by id
router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID is:', id);
    res.status(200).json({ message: 'This is data from title API', id: id, data: titles, success: true}); 
});

// delete title by id
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID is:', id);
    res.status(200).json({ message: 'This is data from title API', id: id, data: titles, success: true}); 
});

module.exports = router;