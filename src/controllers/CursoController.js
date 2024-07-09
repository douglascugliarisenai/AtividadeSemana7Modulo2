const Curso = require('../models/Curso')
const { Op } = require('sequelize')

class CursoController {
    async cadastrarCurso(dados) {
        const curso = await Curso.create({
            nome: dados.nome,
            duracao: dados.duracao
        })

        return curso
    }

    async listarCursos() {
        const cursos = await Curso.findAll()
        return cursos
    }

    async buscarCurso (id) {
        const curso = await Curso.findByPk(id)
        return curso
    }

    async buscarCursoNome (nome) {
        const curso = await Curso.findAll({where: {nome: {[Op.iLike]: `%${nome}%`}}})
        return curso
    }

    async buscarCursoDuracao (duracao) {
        const curso = await Curso.findAll({where: {duracao: duracao}})
        return curso
    }
}

module.exports = new CursoController()