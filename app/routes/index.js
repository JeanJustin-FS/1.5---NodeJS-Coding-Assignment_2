const express = require('express');
const router = express.Router();

const todoRoutes = require('./todoRoutes');
// const titleRoutes = require('./titleRoutes');

//localhost: 3000/api/v1
router.get('/', (req, res) => {
    res.status(200).json({ message: 'This is data from the API', success: true});
});

//localhost: 3000/api/v1/todos
router.use('/todos', todoRoutes);
//localhost: 3000/api/v1/titles
// router.use('/titles', titleRoutes);

module.exports = router;