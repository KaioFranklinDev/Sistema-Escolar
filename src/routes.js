const express = require('express');
const router = express.Router();

const EscolarController =  require('./controllers/EscolarController')

router.get('/professores', EscolarController.buscarTodos);

router.get('/aaa', (req, res) => {
    res.send('Hello World!');
});

router.get('/professor/:codigo', EscolarController.buscarUm);

module.exports = router;