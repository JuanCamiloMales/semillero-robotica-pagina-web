import React from 'react'
import ListProjects from './ListProjects/ListProjects'
import './Projects.css'
import Search from './Search/Search'
const Proyectos = require('./../../Proyectos.json')

export default function Projects() {

  return (
    <div className='Projects'>
      <Search />
      <ListProjects Projects = {Proyectos}/>
    </div>
  )
}
