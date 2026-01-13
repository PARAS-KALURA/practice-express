const express = require('express');
const app = express();


const PORT = 3000;

let items = [
    {id: 1, name: "Pen"},
    {id: 2, name: "Book"},
];

app.use(express.json());

app.get('/items', (req, res) => {
    res.status(200).json(items);
});

app.get('/items:id', (req, res) => {
    const id = parseInt(req.params.id);

    const item = items.find( i => i.id === id);
    if(!item) {
        return res.status(404).json({error: "Item not found :)"});
    }

} )

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);
    
})