const path = require('path');
const express = require('express');
const router = express.Router();

const EscolarController =  require('./controllers/EscolarController')

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/login.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/main.html'));
});

router.get('/api/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/style.css'));
});

router.get('/disciplinaADD', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/disciplinaADD.html'));
});

router.get('/docente', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/docente.html'));
});

router.get('/api/img-user', (req, res) => {
    res.sendFile(path.join(__dirname, '../assets/img/perfil.png'));
});

router.get('/direcao', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/html/direção.html'));
});

router.get('/api/professores', EscolarController.buscarTodos);
router.get('/api/professor/:codigo', EscolarController.buscarUm);
router.post('/api/professor', EscolarController.inserir);
router.put('/api/professor/:codigo', EscolarController.alterar);
router.delete('/api/professor/:codigo', EscolarController.excluir);



module.exports = router;