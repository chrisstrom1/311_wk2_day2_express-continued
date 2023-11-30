let db = require("../data/comments");

// this function should return all the contacts
let getComments = function(req,res){

    res.json(db);
};

module.exports = {
    getComments
}





// In a real application, data would be stored in a database. For simplicity, using an array.
// let elements = [
//     { id: 1, name: 'User' },
//     { id: 2, name: 'ToDoItem' },
//     // Other elements...
//   ];
  
//   const getAllElements = (req, res) => {
//     res.json(elements.map(element => ({ id: element.id, name: element.name })));
//   };
  
//   const getElementById = (req, res) => {
//     const { id } = req.params;
//     const element = elements.find(e => e.id === parseInt(id));
//     if (element) {
//       res.json(element);
//     } else {
//       res.status(404).json({ message: 'Element not found' });
//     }
//   };
  
//   const addElement = (req, res) => {
//     const newElement = req.body;
//     newElement.id = elements.length + 1; // In a real scenario, use unique IDs.
//     elements.push(newElement);
//     res.status(201).json(newElement);
//   };
  
//   const deleteElementById = (req, res) => {
//     const { id } = req.params;
//     elements = elements.filter(e => e.id !== parseInt(id));
//     res.json({ message: `Element with ID ${id} deleted successfully` });
//   };
  
//   const updateElementById = (req, res) => {
//     const { id } = req.params;
//     const index = elements.findIndex(e => e.id === parseInt(id));
//     if (index !== -1) {
//       elements[index] = { ...elements[index], ...req.body };
//       res.json(elements[index]);
//     } else {
//       res.status(404).json({ message: 'Element not found' });
//     }
//   };
  
//   module.exports = {
//     getAllElements,
//     getElementById,
//     addElement,
//     deleteElementById,
//     updateElementById,
//   };