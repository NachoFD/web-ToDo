/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './styles/App.css'
import Tarea from './componentes/Tarea'

function App() {

  const [ tema, setTema ] = useState('dark')

  const [ tarea, setTarea ] = useState(null)
  const [ activas, setActivas ] = useState([])
  const [ completadas, setCompletadas ] = useState([])

  const [ filtrar, setFiltrar ] = useState('todas')

  const crearTarea = () => {
    activas.push(tarea)
    setTarea(null)
  }

  const completarTarea = (tareaACompletar) => {
    const filtrarTareas = activas.filter(tarea => {
        if(tarea != tareaACompletar){
          return tarea
        }
    })

    setActivas(filtrarTareas)
    completadas.push(tareaACompletar)
  }

  const reanudarTarea = (tareaAReanudar) => {
    const filtrarTareas = completadas.filter(tarea => {
      if(tarea != tareaAReanudar){
        return tarea
      }
  })

    setCompletadas(filtrarTareas)
    activas.push(tareaAReanudar)
  }

  const limpiarCompletadas = () => {
    setCompletadas([])
  }

  return (
    <div className='fondo-1' style={{backgroundColor: tema == 'light' ? '#1f1f1f' : ''}}>

      <header className='fondo-2'>
        <div className='fondo-3' style={{opacity: tema == 'light' ? '0.8' : '0.8'}}></div>
      </header>

      <main className='display-todo'>
        
        <header className='todo-titulo'>
          <h1>T O - D O</h1>
          { tema == 'dark' ?
            <i className="bi bi-brightness-high" onClick={() => setTema('light')}></i>
          : 
            <i className="bi bi-brightness-high-fill" onClick={() => setTema('dark')}></i>
          }
        </header>
        
        <main>
          <header className='header-tareas' style={ tema == 'light' ? {backgroundColor: '#d6d6d6', color:'black'} : {}}>
            <i className="bi bi-circle"></i>
            <form onSubmit={(e) => {e.preventDefault(); crearTarea()}} method="post">
              <input style={ tema == 'light' ? {backgroundColor: '#d6d6d6', color:'black'} : {}} type="text" placeholder='Crear una nueva tarea' value={tarea || ''} onChange={(e) => setTarea(e.target.value)} />
            </form>
          </header>
          <main className='contenedor-tareas' style={ tema == 'light' ? {backgroundColor: '#d6d6d6'} : {}}>
            { filtrar == 'todas' ?
              <>
                {
                  activas.map((tarea, index) => (
                    <Tarea key={index} tema={tema} tarea={tarea} estado={'pendiente'} completar={() => completarTarea(tarea)} reanudar={() => reanudarTarea(tarea)}/>
                  ))
                }
                {
                  completadas.map((tarea, index) => (
                  <Tarea key={index} tema={tema} tarea={tarea} estado={'completada'} completar={() => completarTarea(tarea)} reanudar={() => reanudarTarea(tarea)}/>
                  ))
                }
              </>
            : <></>}

            { filtrar == 'pendientes' ?
                activas.map((tarea, index) => (
                  <Tarea key={index} tema={tema} tarea={tarea} estado={'pendiente'} completar={() => completarTarea(tarea)} reanudar={() => reanudarTarea(tarea)}/>
                ))
            : <></>}

            { filtrar == 'completadas' ?
              completadas.map((tarea, index) => (
                <Tarea key={index} tema={tema} tarea={tarea} estado={'completada'} completar={() => completarTarea(tarea)} reanudar={() => reanudarTarea(tarea)}/>
                ))
            : <></>}

          </main>
          <hr />
          <footer className='footer-tareas' style={ tema == 'light' ? {backgroundColor: '#d6d6d6', color:'gray'} : {}}>
            <h3 style={{marginRight:'auto', cursor:'default'}} >{activas.length} Pendientes</h3>
            <div className='footer-tareas-filtrar'>
              <h3 style={ tema == 'dark' ?  filtrar === 'todas' ? {color:'white'} : {} : filtrar === 'todas' ? { color:  'black', fontWeight:'500'} : {}} onClick={() => setFiltrar('todas')}>Todas</h3>
              <h3 style={ tema == 'dark' ?  filtrar === 'pendientes' ? {color:'white'} : {} : filtrar === 'pendientes' ? { color:  'black', fontWeight:'500'} : {}} onClick={() => setFiltrar('pendientes')}>Pendientes</h3>
              <h3 style={ tema == 'dark' ?  filtrar === 'completadas' ? {color:'white'} : {} : filtrar === 'completadas' ? { color:  'black', fontWeight:'500'} : {}} onClick={() => setFiltrar('completadas')}>Completadas</h3>
            </div>
            <h3 style={{marginLeft:'auto'}} onClick={limpiarCompletadas} id='boton'>Limpiar Completadas</h3>
          </footer>
        </main>

      </main>

      <footer className='creditos'>
        <a href="https://nachofd.github.io/Portfolio/" target='_blank' rel="noreferrer">
          <h4>Portfolio</h4>
          <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </footer>
    </div>
  )
}

export default App
