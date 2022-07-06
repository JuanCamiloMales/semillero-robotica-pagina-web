import React from 'react'
import './Guides.css'
import GuidesBody from './GuidesBody/GuidesBody'
import GuidesNav from './GuidesNav/GuidesNav'

export default function Guides({ params }) {
  const { keyword = null } = params

  return (
    <div className="Guides">
      <div className="Guides_paddingleft" />
        <GuidesBody keyword={keyword} />
        { keyword ? <GuidesNav keyword={keyword} /> : null}
      <div 
        className={ keyword ? "Guides_paddingrigth" : " Guides_paddingrigth Guides_paddingrigth_gray "} />
    </div>
  )
}
