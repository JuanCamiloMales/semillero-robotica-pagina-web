import React from 'react';
import { useLocation } from 'wouter';
import './Nav.css';
import NavIteam from './NavIteam';

export default function Nav(){

    const [path] = useLocation();

    return (
        <nav className='Nav'>
            <NavIteam 
                name='Proyectos'
                href='/Proyectos'
                icon='work'
                isActive={path === '/Proyectos'}
            />
            <NavIteam 
                name='Guias' 
                href='Guias'
                icon='library_books'
                isActive={path === '/Guias'}
            />
        </nav>
    )
}