import {gql} from '@apollo/client'

export const GET_ALL_RECORDS = gql`
    query {
        getAllRecords {
            user_id{nickname,avatar},game_code{title},score,time
        }
    }    

`

export const GET_ONE_RECORD = gql`
    query getRecord($id: ID){
        getRecord(id: $id) {user_id{nickname,avatar},game_code{title},score,time
        }
    }    

`