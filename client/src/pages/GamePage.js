import React, { useState } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import './style.css'
import {useQuery} from "@apollo/client";
import {GET_ALL_GAMES, GET_ONE_GAME} from "./graphql/Query/game";

export const GamePage = () => {
    var url = window.location.href.split('/')[4];
    const {data, loading, error} = useQuery(GET_ALL_GAMES)
    const {data:oneGame, loading: loadingOneGame} = useQuery(GET_ONE_GAME, {
        variables: {
            id: parseInt(url)
        }
    })
    const [game, setGame] = useState([])
    
    React.useEffect(() => {
        if (!loading) {
            console.log(data)
            data.getAllGames.forEach(e => {
                game.push(e)
            });
            GetGame();
        }
    }, [data])

    function GetGame(){
        const OneGame=null
        //=game[0]
        console.log(OneGame)
        if(!OneGame){
            return <h1>404 Игра не найдена</h1>
        }
        //var Game = require(OneGame.path);
        //var Jobs = require('./Games/Snake');   
    }
    
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
                            <a href='./'>Home</a>
                        </li>
                        <li className="active">
                    <a href='./games'>Games</a>
                        </li>
                        <li>
                    <a href='./login'>Log In</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Router>
            </Router>
        </div>
    )
}