import React from 'react'
import CardProyect from './CardProyect'
import './Category.css'

export default function Category() {
  return (
    <div className='Category'>
      <h1 className="Category-title">Seguidores de linea</h1>

      <div className="Container-Proyects">
        {proyects.map(({ title, image, url, id }) => (
          <CardProyect key={id} imageSource={image} title={title} url={url} />
        ))}
      </div>
    </div>
  )
}

const proyects = [
  {
    id: 1,
    title: 'Velocista Analogico',
    image: 'Velocista1',
    url: 'Velocista1',
  },
  {
    id: 2,
    title: 'Velocista ',
    image: 'Velocista2',
    url: 'Velocista2',
  },
  {
    id: 3,
    title: 'Velocista con turbina',
    image: 'Velocista3',
    url: 'Velocista3',
  },
]
