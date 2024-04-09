const EscolarService = require('../services/EscolarService');

module.exports = {
    buscarTodos: async (req, res)=>{
        let json = {error:'', result:[]};

        let professores = await EscolarService.buscarTodos();

        for(let i in professores){
            json.result.push({
                codigo: professores[i].codigo,
                nome: professores[i].nome,
                idade: professores[i].idade

            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:``, result:{}};
        
        let codigo = req.params.codigo;
        let professor = await EscolarService.buscarUm(codigo);
        

        if(professor){
            json.result = professor;
        }
        
        res.json(json);
    }
}