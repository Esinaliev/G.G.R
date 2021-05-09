import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {GamesPage} from './pages/GamesPage'
import {GamePage} from './pages/GamePage'
import {LoginPage} from './pages/SingUp'

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/" exact>
                    <HomePage/>
                </Route>
                <Route path="/login" exact>
                    <LoginPage/>
                </Route>
                <Route path="/games/" exact>
                    <GamesPage/>
                </Route>
                <Route path="/games/:id">
                    <GamePage/>
                </Route>
                <Redirect to="/login"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/login" exact>
                <LoginPage/>
            </Route>
            <Route path="/games/" exact>
                <GamesPage/>
            </Route>
            <Route path="/games/:id">
                <GamePage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}