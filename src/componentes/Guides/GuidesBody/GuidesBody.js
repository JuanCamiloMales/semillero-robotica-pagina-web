import React from 'react';
import './GuidesBody.css';
import { Route } from 'wouter';
import ListGuides from './ListGuides/ListGuides';
import Guide from './Guide/Guide'

export default function GuidesBody() {
    return (
        <div className="GuidesBody">
            <Route
                path="/Guias"
                component={ListGuides} 
            />
            <Route
                path="/Guias/:Name"
                component={Guide} 
            />
        </div>
    );
}