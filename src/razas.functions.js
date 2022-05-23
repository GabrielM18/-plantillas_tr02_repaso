

const get_noches = async (req, res) => {
    const { query, params, body } = req

    const order = query.order || params.order || 'createdAt'
    let orderBy = {}
    orderBy[order] = 1

    const data = {
        noches:req.body.noches
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