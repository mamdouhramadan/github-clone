import React from 'react'
import './Loader.css'

export default function Loader() {
    return (
        <div className="app__loader">
            <div className="p-3 border">
                <div className="spinner-border " role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    )
}
