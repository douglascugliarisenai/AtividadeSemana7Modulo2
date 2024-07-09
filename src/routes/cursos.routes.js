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

cursosRoutes.get('/', async(request, response) => {
    const cursos = await CursoController.listarCursos()

    if(!cursos){
        return response.status(400).json('Não existem cursos cadastrados')
    }

    return response.status(200).json(cursos)
})

cursosRoutes.get('/:id', async(request, response) => {
    const id = request.params.id
    const curso = await CursoController.buscarCurso(id)

    if(!curso){
        return response.status(400).json({erro: 'Curso inexistente'})
    }

    return response.status(200).json(curso)
})

cursosRoutes.get('/nome/:nome', async(request, response) => {
    const nome = request.params.nome
    const curso = await CursoController.buscarCursoNome(nome)   

    if(!curso){
        return response.status(400).json({erro: 'Curso inexistente'})
    }   

    return response.status(200).json(curso)
})

cursosRoutes.get('/duracao/:duracao', async(request, response) => {
    const duracao = request.params.duracao
    const curso = await CursoController.buscarCursoDuracao(duracao) 

    if(!curso){
        return response.status(400).json({erro: 'Curso inexistente'})
    }   

    return response.status(200).json(curso)
})

module.exports = cursosRoutes