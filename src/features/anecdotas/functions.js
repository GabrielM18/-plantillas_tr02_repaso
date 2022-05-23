const model = require('../../models/anecdotas')

const listar_anecdotas = async (req, res, next) => {
    const { query } = req
    const { order } = query

    const orderBy = {}
    orderBy[order] = 1

    const anecs = await model.find().sort(orderBy)

    // TODO: Muestrame la lista de anecdotas
    res.render('anecdotas', {items:anecs} )

}

const detalle_anecdota = async (req, res, next) => {
    const { params } = req
    const { id } = params

    const anec = await model.findById(id)
    if (!anec) {
        return res.redirect('/anecdotas')
    }

    // TODO: Mostrar Detalle de Anecdota
    res.render('anecdota', {item:anec})
}

const crear_anecdota = async (req, res, next) => {
    const { body } = req
    const { titulo, cuerpo } = body

    const anec = new model({
        titulo,
        cuerpo
    })

    await anec.save()

    // TODO: Mostrar los datos recien creados
    res.render('anecdota_crear', {item:anec})
}

const editar_anecdota = async (req, res, next) => {
    const { params } = req
    const { id } = params

    let anec = await model.findById(id)
    if (!anec) {
        return res.redirect('/anecdotas')
    }

    const { body } = req
    const { titulo, cuerpo } = body

    anec.titulo = titulo
    anec.cuerpo = cuerpo

    await anec.save()

    // TODO: Mostrar los datos recien creados
    res.render('anecdota_update', {item:anec})

}

const borrar_anecdota = async (req, res, next) => {
    const { params } = req
    const { id } = params

    const anec = await model.findById(id)
    if (!anec) {
        return res.redirect('/anecdotas')
    }
    await model.findByIdAndDelete(id)
    res.redirect('/anecdotas')
}


exports.borrar  = borrar_anecdota
exports.crear = crear_anecdota
exports.editar = editar_anecdota
exports.detalle = detalle_anecdota
exports.listado = listar_anecdotas