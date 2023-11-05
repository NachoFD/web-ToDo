/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import '../styles/Tarea.css'

function Tarea(props) {

    const estado = props.estado
    const tarea = props.tarea

    const completarTarea = props.completar
    const reanudarTarea = props.reanudar

    return (
        <>
            <div className='display-tarea'>
                { estado === 'pendiente' ? 
                    <>
                        <i className="bi bi-circle" onClick={completarTarea}></i> 
                        <h2>{tarea}</h2>
                    </>
                : 
                    <>
                        <i className="bi bi-check-circle-fill" onClick={reanudarTarea}></i>
                        <h2 style={{color:'gray', textDecoration:'line-through'}}>{tarea}</h2>
                    </>
                }
            </div>
            <hr className='barra' />            
        </>
    )
}

export default Tarea