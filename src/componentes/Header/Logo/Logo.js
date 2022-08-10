import React from 'react'
import { Link } from 'wouter'
import './Logo.css'

export default function Logo(){
    return (
        <Link to={'/'} className={'Logo'}>
                <img className='Logo-img' src='Logo-img.svg' alt='Logo'/>
        </Link>
    )
}