import React from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

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
