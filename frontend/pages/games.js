import {useState, useEffect} from 'react'
import Link from 'next/link';
import A from '../components/navigationBar'
import B from '../components/gameTable'

    /*const [games,setGames] = useState([
        {id:1,name:'Snake',path:'/games/Snake',avatar:''},
        {id:2,name:'Minecraft',path:'/games/Minecraft',avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.igromania.ru%2Farticle%2F31609%2FIstoriya_Minecraft_i_eyo_sozdatelya._Kto_i_kogda_sdelal_legendarnuyu_igru.html&psig=AOvVaw2gRHXtWJsSv0NJP1SR4CWx&ust=1621275602157000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjjyr7ozvACFQAAAAAdAAAAABAD'},
        {id:3,name:'not found',path:'/404',avatar:''},
    ])*/
const Games = () => {
    return (
        <div>
            <div>
                <A name="Games"/>
            </div>
            <B/>
        </div>
    );
};

export default Games;