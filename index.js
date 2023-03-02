const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.redirect('/todos'); // redirect the root route to the /todos route
});



// Start the server
app.listen(port, () => {
    console.log(`To-do list app listening at http://localhost:${port}`);
});
