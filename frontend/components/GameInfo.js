import {useState} from 'react'
import styles from '../styles/GameInfo.module.css'
export default function gameTable(url) {
    const [games,setGames] = useState([
        {id:1,name:'Snake',avatar:'https://lh3.googleusercontent.com/ficwmgoH212H1yR7_d4tswB8lv_TOFcWjLv9txhgP5yrP53iKywh-Z_Yk-z2XC0Jvg=h300',date_creation: "1995"
            ,description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ipsum eveniet perspiciatis fugiat exercitationem officiis iure consectetur odit eum facilis sed voluptates delectus quasi, maiores quam aperiam rem placeat voluptate?"
        },
        {id:2,name:'Minecraft',avatar:'https://compass-ssl.xbox.com/assets/34/bb/34bb1efc-0142-4ef3-bb04-c15c8439937e.jpg?n=Minecraft_Sneaky-Slider-1084_Buzzy-Bees_1600x675.jpg',date_creation: "2009"
            ,description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem alias, quia quidem beatae molestiae, fugit mollitia commodi optio aspernatur illum suscipit? Neque at ex eligendi enim quae quia quos!"
        }
    ])
    var loading=false
    var game = 1
    load()
    function load() {
        game = games.find(game => game.name == url.url)
        loading=games.find(game => game.name == url.url)|1
    }
    if(!loading)
    return (
        <h2>Loading</h2>
    )
    if(!game)
    return (
        <h2>Not Found</h2>
    )
    return (
        <div className={styles.info}>
            <img className={styles.img} src={game.avatar}/><br/>
            <h2>{game.name}</h2>
            <p>{"Дата выпуска: "+game.date_creation}</p><br/>
            <div>{game.description}</div>
            
        </div>
    )
}