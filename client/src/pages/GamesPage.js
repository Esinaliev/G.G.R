import React, { useState } from 'react'
import './style.css'
import {useQuery} from "@apollo/client";
import {GET_ALL_GAMES, GET_ONE_GAME} from "./graphql/Query/game";
import {GamePage} from "./GamePage"

export const GamesPage = () => {
    const {data, loading, error} = useQuery(GET_ALL_GAMES)
    const [game, setGame] = useState([])
    
    React.useEffect(() => {
        if (!loading) {
            data.getAllGames.forEach(e => {
                game.push(e)
            });
            console.log(game)
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
            <div className="catalog">
                {game.forEach(e => {
                    <div>{e.title}</div>
                })}
            </div>
        </div>
    )
}