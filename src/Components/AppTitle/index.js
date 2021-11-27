import React from 'react';
import './AppTitle.css';

export default function AppTitle({ title, subtitle }) {
    return (
        <div className="app__header border-bottom text-center py-5">
            <div className="container">
                <h2 className="app__title ">{title}</h2>
                <p className="app__subtitle">{subtitle}</p>
            </div>
        </div>
    )
}
