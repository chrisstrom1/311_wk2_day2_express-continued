let express = require("express");

let router = express.Router();

let controller = require("./commentsController");

router.get("/comments", controller.getComments);

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const controllers = require('./controllers');

// router.get('/elements', controllers.getAllElements);
// router.get('/elements/:id', controllers.getElementById);
// router.post('/elements', controllers.addElement);
// router.delete('/elements/:id', controllers.deleteElementById);
// router.put('/elements/:id', controllers.updateElementById);

// module.exports = router;