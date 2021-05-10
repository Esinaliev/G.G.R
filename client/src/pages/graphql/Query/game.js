import {gql} from '@apollo/client'

export const GET_ALL_GAMES = gql`
    query {
        getAllGames {
            code,title,path,genres{title}
        }
    }

`// 

export const GET_ONE_GAME = gql`
    query getGame($code: Int){
        getGame(code: $code) {
            title,path,genres{title}
        }
    }    

`
