const express = require('express');
const app = express();

const PORT = 3000;

app.get('/item', (req, res) => {
    console.log("Hey");
    res.send("Hey")
} )

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);
    
})