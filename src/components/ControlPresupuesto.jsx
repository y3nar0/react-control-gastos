import React from 'react'

const ControlPresupuesto = ({ presupuesto }) => {

    const formatarCantidad = cantidad => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica Aquí</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span> {formatarCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span> {formatarCantidad(0)}
            </p>
            <p>
                <span>Gastado: </span> {formatarCantidad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto