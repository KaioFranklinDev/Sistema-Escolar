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
    },

    inserir: async(req, res) => {
        let json = {error:``, result:{}};
        
        let nome = req.body.nome;
        let idade = req.body.idade;
        
        

        if(nome && idade){
            let ProfessorCodigo = await EscolarService.inserir(nome, idade);
            json.result = {
                codigo: ProfessorCodigo,
                nome,
                idade
            };
        }else{
            json.error = 'Campos não enviados!';
        }
        
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:``, result:{}};
        
        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let idade = req.body.idade;
        
        

        if(codigo && nome && idade){
            await EscolarService.alterar(codigo, nome, idade);
            json.result = {
                codigo,
                nome,
                idade
            };
        }else{
            json.error = 'Campos não enviados!';
        }
        
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:``, result:{}};
        
        await EscolarService.excluir(req.params.codigo)
        
        res.json(json);
    }

}