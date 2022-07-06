import React from 'react';
import { Link, useLocation } from 'wouter';

export default function ItemsGuide( {keyword} ) {

    const [path] = useLocation;

    return(
        <div>
            <ul className=''>
                <li className=''>
                <Link to={`${path}/Repositorios`}  className=''>
                    Repositorios
                </Link>
                </li>
                <li className=''>
                <Link to={`${path}/SeguidorLinea`}  className=''>
                    Seguidor de linea
                </Link>
                </li>
                <li className=''>
                <Link to={`${path}/Impresora3D`}  className=''>
                    Impresora 3D
                </Link>
                </li>
                <li className=''>
                <Link to={`${path}/FabricarPCBconCNC`}  className=''>
                    Fabricar PCB con CNC
                </Link>
                </li>
            </ul>
        </div>
    )
}