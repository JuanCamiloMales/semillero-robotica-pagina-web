import React from 'react'
import CardProject from '../CardProject/CardProject'
import './ListProjects.css'

export default function ListProjects({ Projects }) {
  
return (
    <div className="ListProyects">
      {
        Projects.map(({id, nombre, estado, repositorio, tutor, estudiantes}) => 
          <CardProject
            key={id}
            nombre={nombre}
            estado={estado}
            repositorio={repositorio}
            tutor={tutor}
            estudiantes={estudiantes}
          />
        )
      }
    </div>
  )
}
