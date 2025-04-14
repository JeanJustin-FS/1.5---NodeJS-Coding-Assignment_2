const express = require('express');
const router = express.Router();
const title = []

router.get('/', (req, res) => {
    res.status(200).json({ message: 'This is data from the title API', title, success: true});
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID is:',id);
    res.status(200).json({ message: 'This is data from the title API', title, Id: Id, success: true});
});

router.post('/', (req, res) => {
    const title = req.body;
    titles.push(title);
    console.log('Todo is:',titles)    
    res.status(200).json({ message: 'This is data from the title API', data: titles[titles.length -1] , success: true});

});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID is:',id);
    res.status(200).json({ message: 'This is data from the title API', title, Id: Id, success: true});
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID is:',id);
    res.status(200).json({ message: 'This is data from the title API', title, Id: Id, success: true});

});

module.exports = router;