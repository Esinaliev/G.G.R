import React, { useState } from 'react'
import './style.css'

export const LoginPage = () => {
    const [form,setForm] =useState({
        login: '',password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    

    return (
        <div className="singup">
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>Регистрация</h1>
                    <div className="card blue darken-1">
                        <div className="card-content while-text">
                            <span className="crad-title">Авторизация</span>
                            <div>
                                <div className="input-fiend">
                                    <input
                                    placeholder="Введите login"
                                    id="login"
                                    type="text"
                                    name="login"
                                    onChange={changeHandler}
                                    />
                                    <label htmlFor="login">Login</label>
                                    </div>
                                <div className="input-fiend">
                                    <input
                                    placeholder="Введите пароль"
                                    id="password"
                                    type="text"
                                    name="password"
                                    onChange={changeHandler}
                                    />
                                    <label htmlFor="email">Пароль</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button>Войти</button>
                            <button>Регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}