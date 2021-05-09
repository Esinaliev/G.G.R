import React, { useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import './style.css'

export const LoginPage = () => {
    const {loading, error, request} = useHttp()
    const [form,setForm] =useState({
        login: '',password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler =async () => {
        try {
            const data = await request('/api')
        } catch (e) { }
    }

    return (
        <div>
            <div className="top">
                <div className="h1">Log In</div>
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href='./'>Home</a>
                        </li>
                        <li>
                    <a href='./games'>Games</a>
                        </li>
                        <li className="active">
                    <a href='./login'>Log In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}