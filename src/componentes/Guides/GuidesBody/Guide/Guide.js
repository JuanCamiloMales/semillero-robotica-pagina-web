import React from 'react';
import './Guide.css'

export default function Guide() {
    return (
        <div className="Guide">
            <p className='ListGuides_title'>Repositorios</p>
            <p className='ListGuides_descripcion'>Es un espacio donde se almacena, organiza, mantiene y difunde información digital, habitualmente archivos informáticos, que pueden contener trabajos científicos, conjuntos de datos o software.</p>
            <p className='ListGuides_descripcion'>Uno de los repositorios mas usados por pequeños proyectos y grandes empresas es GITHUB, el cual está basado en GIT.</p>
            <hr></hr>
            <p className='ListGuides_title2'>GIT</p>
            <p className='ListGuides_descripcion'>Es un software de control de versiones, cuyo propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código. </p>
            <img className='img_repositorios' src='/Img/Codigo.png'></img> 
        </div>
    );
}