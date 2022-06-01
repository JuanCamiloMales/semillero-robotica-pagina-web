import React from 'react';
import './CardProyect.css'

export default function CardProyect({ imageSource, title, url }) {

  const image = `/images/${imageSource}.jpg`;

  return (
    <div className='Card'>
        <img src={image} />
        <h1>{title}</h1>
    </div>
  )
}