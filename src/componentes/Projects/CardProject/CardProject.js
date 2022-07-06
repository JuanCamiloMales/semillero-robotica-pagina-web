import React from 'react'
import './CardProject.css'

export default function CardProject({nombre, estado, repositorio, tutor, estudiantes}) {

  return (
    <div className="CardProject">
      <div className="CardProject_header">
        <p className="CardProject_state">{estado}</p>
        <p className='CardProject_name'>{nombre}</p>
        <a className='CardProject_repository' href='#'>Ir al repositorio {'  ->'}</a>
      </div>
      <div className='CardProject_body'>
        <div className='CardProject_container_tutor'>
          <p className='CardProject_title_tutor'>TUTOR: </p>
          <p className='CardProject_tutor'>{tutor}</p>
        </div>
        <div className='CardProject_tontainer_student'>
          <p className='CardProject_title_student'>ESTUDIANTES: </p>
          {
            estudiantes.map(({id, nombre}) =>
              <p className='CardProject_student' key={id}>{nombre}</p>
            )
          }
        </div>
      </div>
    </div>
  )
}