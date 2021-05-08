import React from 'react'
import './style.css'

export const HomePage = () => {
    return (
        <div className="container">
            <div className="top">
                <div>
                <h1>Home Page</h1>
                </div>
                <a href='./login'>Log In</a>
            </div>
            <div className="right">
                <a href='./login'>Log In</a>
            </div>
        </div>
    )
}