const { buscarUm, excluir } = require('../controllers/EscolarController');
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

    },
    inserir: (nome, idade) => {

        return new Promise ((aceito,rejeitado)=>{

            db.query('INSERT INTO professores (nome, idade) VALUES (?,?)',
                [nome, idade],
                (error,results)=>{
                    if(error){ rejeitado(error); return}
                    aceito(results.insertCodigo);
                }
            );

        });

    },

    alterar: (codigo, nome, idade) => {

        return new Promise ((aceito,rejeitado)=>{

            db.query('UPDATE professores SET nome = ?, idade= ? WHERE codigo = ?',
                [nome, idade, codigo],
                (error,results)=>{
                    if(error){ rejeitado(error); return}
                    aceito(results);
                }
            );

        });

    },
    excluir: (codigo)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM professores WHERE codigo = ?',[codigo],(error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};