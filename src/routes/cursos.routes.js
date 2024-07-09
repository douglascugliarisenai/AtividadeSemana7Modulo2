const {Router} = require('express')
const CursoController = require('../controllers/CursoController')

const cursosRoutes = new Router()

cursosRoutes.post('/', async(request, response) => {
    const dados = request.body
    
    if(!dados.nome){
        return response.status(400).json({erro: 'Nome obrigatorio'})
    }

    if(!dados.duracao){
        return response.status(400).json({erro: 'Duracao obrigatorio'})
    }

    const curso = await CursoController.cadastrarCurso(dados)
    if(!curso){
        return response.status(400).json({erro: 'Erro ao cadastrar o curso'})
    } else {
        return response.status(201).json({"Curso Cadastrado com sucesso": curso})
    }
})

module.exports = cursosRoutes