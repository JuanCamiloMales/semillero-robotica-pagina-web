import React from 'react'
import './Search.css'

export default function Search() {
  return (
    <div className='search'>
      <p className='searh_title'>Proyectos</p>
      <form className='search_bar'>
        <input type='text' placeholder='Busca un proyecto'/>
        <button>
            <span className="nav__iteamIcon material-icons">search</span>
        </button>
      </form>
    </div>
  )
}