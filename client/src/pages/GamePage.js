import React, { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import {useGameRoutes} from './Games/GameRoutes'
import './style.css'
import {useQuery} from "@apollo/client";
import {GET_ALL_GAMES} from "./graphql/Query/game";

export const GamePage = () => {
    var url = window.location.href.split('/')[4];
    const {data, loading, error} = useQuery(GET_ALL_GAMES)
    const [game, setGame] = useState([])
    const router = useGameRoutes(url)
    
    React.useEffect(() => {
        if (!loading) {
            data.getAllGames.forEach(e => {
                game.push(e)
            });
        }
    }, [data])
    
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <div className="top">
                <div className="h1">Game Page </div>
                <div className="menu-link">
                    <ul>
                        <li>
                            <a href='../'>Home</a>
                        </li>
                        <li className="active">
                    <a href='../games'>Games</a>
                        </li>
                        <li>
                    <a href='../login'>Log In</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Router>
                    {router}
                </Router>
            </div>
        </div>
    )
}