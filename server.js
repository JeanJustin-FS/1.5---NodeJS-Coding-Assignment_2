const app = require('./app/');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end();
// });

// server .listen (PORT, () => {
//         console.log(`listening on ${PORT}`);
// });
