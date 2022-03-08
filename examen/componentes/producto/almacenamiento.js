const model = require('./modelo')

function agregarProducto(producto) {
    const objeto = new model(producto)
    objeto.save()
}

function obtenerProductos(filtroProducto) {
    let filtro = {}
    if (filtroProducto) {
        filtro = { serie: filtroProducto }
    }
    const objeto = model.find(filtro)
    return objeto
}

function actualizarProducto(producto) {
    const objeto = model.findOne({ serie: producto.serie })
    objeto.stock = producto.stock
    objeto.nombre = producto.nombre
    objeto.valor = producto.valor
    const resultado = objeto.save()
    return resultado
}

function eliminarProducto(serie) {
    return model.deleteOne({ serie: serie })
}

module.exports = {
    agregar: agregarProducto,
    obtener: obtenerProductos,
    actualizar: actualizarProducto,
    eliminar: eliminarProducto,
}