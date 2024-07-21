const Professor = require('../models/Professor')
const { Op } = require('sequelize')

class ProfessorController {
    async cadastrarProfessor(request, response) {
        try {
            const dados = request.body
            const professor = await Professor.create(dados)

            if(!professor){
                return response.status(400).json({erro: 'Erro ao cadastrar o professor'})
            }

            return response.status(201).json({"Professor Cadastrado com sucesso": professor})
        } catch (error) {
            return response.status(500).json({erro: "Erro ao cadastrar o professor: " + error})
        }
    }

    async listarProfessores(request, response) {
        try {
            const nome = request.query.nome
            const email = request.query.email
            let professores = ''

            if(nome){
                professores = await Professor.findAll({where: {nome: {[Op.iLike]: `%${nome}%`}}})
            }

            if(email){
                professores = await Professor.findAll({where: {email: {[Op.iLike]: `%${email}%`}}})
            }

            if(nome && email){
               professores = await Professor.findAll({where: {nome: {[Op.iLike]: `%${nome}%`}, email: {[Op.iLike]: `%${email}%`}}}) 

                if(!professores){
                    return response.status(400).json({erro: 'Professor inexistente'})
                }   
            }

            if(!nome && !email){
                professores = await Professor.findAll()
            }

            return response.status(200).json(professores)
        } catch (error) {
            response.status(500).json({erro: "Erro ao buscar os professores: " + error})
        }
    }

    async atualizarProfessor(request, response) {
        try {
            const id = request.params.id
            const dados = request.body

            const professor = await Professor.findByPk(id)

            if(!professor){
                return response.status(400).json({erro: 'Professor inexistente'})
            }
    
            professor = await Professor.update(dados, {where: {id: id}})
            
            if(!professor){
                return response.status(400).json({erro: 'Erro ao atualizar o professor'})
            } else {
                return response.status(200).json({"Professor Atualizado com sucesso": professor})
            }   
        } catch (error) {
            response.status(500).json({erro: "Erro ao atualizar o professor: " + error})
        }
    }

    async deletarProfessor(request, response) {
        try {
            const id = request.params.id    

            const professor = await Professor.findByPk(id)

            if(!professor){
                return response.status(400).json({erro: 'Professor inexistente'})
            }

            professor = await Professor.destroy({where: {id: id}})    

            if(!professor){
                return response.status(400).json({erro: 'Erro ao deletar o professor'})
            } else {
                return response.status(204).json({"Professor Deletado com sucesso": professor})
            }   
        } catch (error) {
            response.status(500).json({erro: "Erro ao deletar o professor: " + error})
        }
    }
}


module.exports = new ProfessorController()