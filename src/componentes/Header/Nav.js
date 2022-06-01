import React from 'react';
import './Nav.css';
import NavIteam from './NavIteam';

export default function Nav(){
    return (
        <div className='Nav'>
            <NavIteam 
                name='Guias' 
                href='#' 
                icon='library_books' 
            />
            <NavIteam 
                name='Proyectos' 
                href='#' 
                icon='work' 
            />
        </div>
    )
}