

const get_noches = async (req, res) => {
    const { query, params, body } = req
    const order = query.order || params.order || 'createdAt'
    let orderBy = {}
    orderBy[order] = 1

    // ARRAY
    const noches = [
        {
            nombre: 'Noche 1',
            fecha: '2020-01-01',
            hora: '00:00',
            duracion: '00:00',
            descripcion: 'Descripcion de la noche 1',
            razas: [
                {
                    nombre: 'Raza 1',
                    descripcion: 'Descripcion de la raza 1',
                    personajes: [
                        {
                            nombre: 'Personaje 1',
                            apodo: 'Personaje 1'
                        }
                    ]
                }
            ]
        },
    ]

    const data = {
        noches:noches
    }

    const comparador = (a, b)=>{
        const horaA = a.hora
        const horaB = b.hora
        return (horaA.length > horaB.length) ? -1 : 1
    }
    noches.sort(comparador)

    console.log('Data => ',data)
    console.log('Noches => ', noches)

    // EJ01 -> los datos de noches
    res.render('noches', data)
}

exports.get_noches = get_noches