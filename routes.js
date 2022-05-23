const express = require('express')
const router  = express.Router()

const rHabilidades = require('./features/habilidades/routes')
const rRaza        = require('./features/raza/routes')
const rTrabajo     = require('./features/trabajo/routes')
const rRelaciones  = require('./features/relaciones/routes')
const rLugares     = require('./features/lugares/routes')

const rPersona   = require('./features/persona/routes')
const rAnecdotas = require('./features/anecdotas/routes')
const rPersonaje = require('./features/personaje/routes')
const rCapitulos = require('./features/capitulos/routes')

router.use('/habilidades', rHabilidades)
router.use('/raza', rHabilidades)
router.use('/trabajo', rHabilidades)
router.use('/relaciones', rHabilidades)
router.use('/lugares', rHabilidades)

router.use('/persona', rHabilidades)
router.use('/anecdotas', rHabilidades)
router.use('/personaje', rHabilidades)
router.use('/capitulos', rHabilidades)


// .use <- PARA TODO LO QUE NO SE HAYA MANEJADO

// .get <- Para peticiones GET <-- Recoger Informacion <- MOSTRAR
// .post <- Para peticiones POST <-- Guardar Informacion <- CREAR
// .put <- Para peticiones PUT <-- Actualizar Informacion <- MODIFICAR
// .delete <- Para peticiones DELETE <-- Eliminar Informacion <- ELIMINAR


module.exports = router;