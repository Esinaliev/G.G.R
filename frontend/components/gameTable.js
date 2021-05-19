import {useState} from 'react'
import styles from '../styles/gameTable.module.css'
export default function gameTable() {
    const [games,setGames] = useState([
        {id:1,name:'Snake',avatar:'https://lh3.googleusercontent.com/ficwmgoH212H1yR7_d4tswB8lv_TOFcWjLv9txhgP5yrP53iKywh-Z_Yk-z2XC0Jvg=h300'},
        {id:2,name:'Minecraft',avatar:'https://images.androeed.ru/icons/2019/12/28/minecraft-pocket-edition-ico.png'},
    ])
    return (
        <div className={styles.gameTable}>
        <ul>
            {games.map(game =>
                <li>
                    <div>
                        <img className={styles.img} src={game.avatar}/><br/>
                        <a href={"/games/"+game.name}>{game.name}</a>
                    </div>
                </li>
            )}
        </ul>
    </div>
    )
}