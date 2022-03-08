const producto = require('../componentes/producto/interfaz')


const rutas = function(servidor) {

    servidor.use('/producto', producto)

}

module.exports = rutas