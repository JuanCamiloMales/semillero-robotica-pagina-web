import React from 'react';
import './ItemsGuide.css';
import { Link} from 'wouter';

export default function ItemsGuide( {keyword} ) {

    return(
        <div className='ItemsGuide' >
            <ul className='ItemsGuide_List'>
                <Link 
                    to={`Guias/Repositorios`}  
                    className='ItemsGuide_Iteam'>
                    Que es Repositorio
                </Link>
                <Link 
                    to={`Guias/SeguidorLinea`}  
                    className='ItemsGuide_Iteam'>
                    Git
                </Link>
                <Link 
                    to={`Guias/Impresora3D`}  
                    className='ItemsGuide_Iteam'>
                    Instalacion
                </Link>
                <Link 
                    to={`Guias/FabricarPCBconCNC`}                            className='ItemsGuide_Iteam'>
                    Como trabajar en equipo
                </Link>
            </ul>
        </div>
    )
}