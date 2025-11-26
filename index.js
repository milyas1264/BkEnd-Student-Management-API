const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Student Management API');
});

app.post('/students', (req, res) => {
    const { name, marks } = req.body;
});
    // Logic to add student
    res.status(201).send({ message: 'Student added successfully' });
app.get('/students', (req, res) => {
    // Logic to get all students
    res.send([]);
});
app.put('/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, marks } = req.body;
    // Logic to update student
    res.send({ message: 'Student updated successfully' });
}); 
app.delete('/students/:id', (req, res) => {
    const { id } = req.params;      
});
    // Logic to delete student
    res.send({ message: 'Student deleted successfully' });

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${3000}`);
});
module.exports = app;