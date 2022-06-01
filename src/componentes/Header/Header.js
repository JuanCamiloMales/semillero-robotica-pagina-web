import React from 'react'
import './Header.css'
import Logo from './Logo'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='Header'>
      <div className='Header-container'>
        <Logo />
        <Nav />
      </div>
    </header>
  )
}
