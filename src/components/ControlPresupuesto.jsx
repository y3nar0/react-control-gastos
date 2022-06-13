import { useState, useEffect } from 'react'

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado

        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])
    

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
                <span>Disponible: </span> {formatarCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatarCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto