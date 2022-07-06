import React from 'react'
import { Link } from 'wouter'
import './NavIteam.css'

export default function NavIteam({ name, href, icon, isActive }) {

  const className = isActive ? 'nav__iteam nav__iteam__Active' : 'nav__iteam'

  return (
    <Link to={href} className={className}>
      <span className="nav__iteamIcon material-icons">{icon}</span>
      <p className="nav__iteamTitle"> {name} </p>
    </Link>
  )
}
