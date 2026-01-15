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

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const item = items.find( i => i.id === id);
    if(!item) {
        return res.status(404).json({error: "Item not found :)"});
    }
    res.status(200).json(item);
});


app.post('/items', (req, res) => {
    const {name} = req.body;

 if(!name){
    return res.status(400).json({error: "Name noot found"});
 }

const newItem = {
  id: items.length ? items[items.length - 1].id + 1 : 1,
  name,
};


 items.push(newItem);

 res.status(201).json(newItem);

});

app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`);
    
});