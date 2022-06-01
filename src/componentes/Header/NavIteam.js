import React from 'react'
import './NavIteam.css'

export default function NavIteam({ name, href, icon }) {
  return (
    <a href={href} className="nav__iteam">
      <span className="nav__iteamIcon material-icons">{icon}</span>
      <p className="nav__iteamTitle"> {name} </p>
    </a>
  )
}
