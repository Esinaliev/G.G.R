import React, { useState } from 'react'
import './style.css'
import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_RECORDS, GET_ONE_RECORD} from "./graphql/Query/record";

export const HomePage = () => {
    const {data, loading, error} = useQuery(GET_ALL_RECORDS)
    const [records, setRecords] = useState([])
    
    React.useEffect(() => {
        if (!loading) {
            console.log(data.getAllRecords)
            data.getAllRecords.forEach(e => {
                records.push(e)
            });
        }
    }, [data])
    
    if (loading) {
        return <h1>Loading...</h1>
    }
    
    return (
        <div className="container">
            <div>
                <div className="top">
                    <div className="h1">Home</div>
                <div className="menu-link">
                    <ul>
                        <li className="active">
                            <a href='./'>Home</a>
                        </li>
                        <li>
                    <a href='./games'>Games</a>
                        </li>
                        <li>
                    <a href='./login'>Log In</a>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="right">
                    <p>Records</p>
                    {records.forEach(e => {
                        <div>{e.user_id.nickname}{e.game_code.title}{e.score}</div>
                    })}
                </div>
            </div>
        </div>
    )
}
/*
user_id{nickname,avatar},game_code{title},score,time
*/