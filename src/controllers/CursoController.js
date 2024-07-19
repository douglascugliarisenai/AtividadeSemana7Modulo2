const Curso = require('../models/Curso')
const { Op } = require('sequelize')

class CursoController {
    async cadastrarCurso(request, response) {
        try {
            const dados = request.body
    
            if(!dados.nome){
                return response.status(400).json({erro: 'Nome obrigatorio'})
            }
        
            if(!dados.duracao){
                return response.status(400).json({erro: 'Duracao obrigatorio'})
            }

            const curso = await Curso.create({
                nome: dados.nome,
                duracao: dados.duracao
            })
            
            if(!curso){
                return response.status(400).json({erro: 'Erro ao cadastrar o curso'})
            } else {
                return response.status(201).json({"Curso Cadastrado com sucesso": curso})
            }    
        } catch (error) {
            response.status(500).json({erro: "Erro ao cadastrar o curso: " + error})
        }
    }

    async listarCursos(request, response) {
        try {
            const cursos = await Curso.findAll()

            if(!cursos){
                return response.status(400).json('Não existem cursos cadastrados')
            }

            return response.status(200).json(cursos)
        } catch (error) {
            response.status(500).json({erro: "Erro ao buscar os cursos: " + error})
        }
    }

    async buscarCurso (request, response) {
        try {
            const id = request.params.id
            const curso = await Curso.findByPk(id)    

            if(!curso){
                return response.status(400).json({erro: 'Curso inexistente'})
            }
            return response.status(200).json(curso)
        } catch (error) {
            response.status(500).json({erro: "Erro ao buscar o curso: " + error})
        }
    }

    async buscarCursoNome (request, response) {
        try {
            const nome = request.params.nome
            const curso = await Curso.findAll({where: {nome: {[Op.iLike]: `%${nome}%`}}})

            if(!curso){
                return response.status(400).json({erro: 'Curso inexistente'})
            }   

            return response.status(200).json(curso)
        } catch (error) {
            response.status(500).json({erro: "Erro ao buscar o curso: " + error})
        }
    }

    async buscarCursoDuracao (request, response) {
        try {
            const duracao = request.params.duracao
            const curso = await Curso.findAll({where: {duracao: duracao}})

            if(!curso){
                return response.status(400).json({erro: 'Curso inexistente'})
            }

            return response.status(200).json(curso)
        } catch (error) {
            response.status(500).json({erro: "Erro ao buscar o curso: " + error})
        }
    }

    async atualizarCurso(request, response) {
        try {
            const id = request.params.id
            const dados = request.body
        
            const curso = await Curso.update(dados, {where: {id: id}})
            
            if(!curso){
                return response.status(400).json({erro: 'Erro ao atualizar o curso'})
            } else {
                return response.status(200).json({"Curso Atualizado com sucesso": curso})
            }

        } catch (error) {
            response.status(500).json({erro: "Erro ao atualizar o curso: " + error})
        }
    }

    async deletarCurso(request, response) {
        try {
            const id = request.params.id

            const cursoConsulta = await Curso.findByPk(id)

            if(!cursoConsulta){
                return response.status(400).json({erro: 'Curso inexistente'})
            }   

            const curso = await Curso.destroy({where: {id: id}})
    
            if(!curso){
                return response.status(400).json({erro: 'Erro ao deletar o curso'})
            } else {
                return response.status(204).json({"Curso Deletado com sucesso": curso})
            }

        } catch (error) {
            response.status(500).json({erro: "Erro ao deletar o curso: " + error})
        }

        
    }
}

module.exports = new CursoController()