const { buscarUm } = require('../controllers/EscolarController');
const db = require('../db');

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM professores',(error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {

        return new Promise ((aceito,rejeitado)=>{

            db.query('SELECT * FROM professores WHERE codigo=?',[codigo], (error,results)=>{
                if(error){ rejeitado(error); return}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });

        });

    }
};