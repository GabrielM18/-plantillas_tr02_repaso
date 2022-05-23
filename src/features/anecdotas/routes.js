const express = require('express')
const router  = express.Router()

const fAnecdotas = require('./functions')

router.get('/:id', fAnecdotas.detalle)
router.post('/', fAnecdotas.crear)
router.put('/:id', fAnecdotas.editar)
router.delete('/:id', fAnecdotas.borrar)

router.get('/', fAnecdotas.listado)


// .use <- PARA TODO LO QUE NO SE HAYA MANEJADO

// .get <- Para peticiones GET <-- Recoger Informacion <- MOSTRAR
// .post <- Para peticiones POST <-- Guardar Informacion <- CREAR
// .put <- Para peticiones PUT <-- Actualizar Informacion <- MODIFICAR
// .delete <- Para peticiones DELETE <-- Eliminar Informacion <- ELIMINAR


module.exports = router;