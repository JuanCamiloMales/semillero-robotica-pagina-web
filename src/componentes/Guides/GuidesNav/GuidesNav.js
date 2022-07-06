import React from 'react';
import './GuidesNav.css';
import ItemsGuide from './ItemsGuide/ItemsGuide';

export default function GuidesNav({keyword}) {
    return (
        <div className="GuidesNav">
            {keyword ? <ItemsGuide keyword={keyword} /> : null }
        </div>
    )
}