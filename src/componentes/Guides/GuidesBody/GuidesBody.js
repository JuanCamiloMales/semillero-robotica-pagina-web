import React from 'react';
import './GuidesBody.css';
import ListGuides from './ListGuides/ListGuides';
import Guide from './Guide/Guide'

export default function GuidesBody({keyword}) {
    return (
        <div className="GuidesBody">
            {keyword ? <Guide keyword={keyword} /> : <ListGuides/> }
        </div>
    );
}