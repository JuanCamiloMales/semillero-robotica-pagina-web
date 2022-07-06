import React from 'react'
import { Link, useLocation } from 'wouter'
import './ListGuides.css'

export default function ListOfGuides() {

  const [path] = useLocation();

  return (
    <div className="ListGuides">

      <p className='ListGuides_title'>Guías</p>
      <p className='ListGuides_descripcion'>Esta página encontraras una lista de todas las guias que podras consultar.</p>
      <hr></hr>
      <ul className='ListGuides_list'>
        <li className='ListGuides_iteam'>
          <Link to={`${path}/Repositorios`}  className='ListGuides_iteam'>
            Repositorios
          </Link>
        </li>
        <li className='ListGuides_iteam'>
          <Link to={`${path}/SeguidorLinea`}  className='ListGuides_iteam'>
            Seguidor de linea
          </Link>
        </li>
        <li className='ListGuides_iteam'>
          <Link to={`${path}/Impresora3D`}  className='ListGuides_iteam'>
            Impresora 3D
          </Link>
        </li>
        <li className='ListGuides_iteam'>
          <Link to={`${path}/FabricarPCBconCNC`}  className='ListGuides_iteam'>
            Fabricar PCB con CNC
          </Link>
        </li>
      </ul>

    </div>
  )
}