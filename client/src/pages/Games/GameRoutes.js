import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {useMutation, useQuery} from "@apollo/client";
import {Game as Snake} from './Snake'
import {Game as Sapper} from './Sapper'
import {NotFound} from '../NotFound'

import {GET_ALL_GAMES, GET_ONE_GAME} from "../graphql/Query/game";

export const useGameRoutes = gameIndex => {
    const {data, loading, error} = useQuery(GET_ALL_GAMES)
    const [game1, setGame1] = useState([])
    var gamePage = null
    let Game
    React.useEffect(() => {
        if (!loading) {
            data.getAllGames.forEach(e => {
                game1.push(e)
            });
            console.log(game1)
            found()
            if(gamePage){
                Game = document.querySelector('.'+gamePage.path);

            }
        }
    }, [data])
    function found() {
        gamePage = game1.find(game => game.code == gameIndex)
        console.log(gamePage)
    }
    
    if (loading) {
        return <h1>Loading...</h1>
    }
        if(!gamePage){
        console.log(gamePage)
        
        return(
                <Switch>
                <Route path="/games/1">
                    <Snake/>
                </Route>
                <Route path="/games/2">
                    <Sapper/>
                </Route>
                    <Route path="/games/:id">
                        {Game}
                    </Route>
                    <Redirect to="/games"/>
                </Switch>
            )
        }
        if(gamePage){
            console.log(gamePage)
            return(
                <Switch>
                    <Route path="/games/:id">
                        <NotFound/>
                    </Route>
                    <Redirect to="/games"/>
                </Switch>
            )
        }
}
/*
<GamePage/>
*/