const express = require('express');
const router = express.Router();

const EscolarController =  require('./controllers/EscolarController')

router.get('/', (req, res) => {
    res.sendFile(__dirname+'/html/index.html');
});

router.get('/professores', EscolarController.buscarTodos);
router.get('/professor/:codigo', EscolarController.buscarUm);
router.post('/professor', EscolarController.inserir);
router.put('/professor/:codigo', EscolarController.alterar);
router.delete('/professor/:codigo', EscolarController.excluir);



module.exports = router;