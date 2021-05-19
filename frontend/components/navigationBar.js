import Link from "next/link";
import styles from '../styles/navigationBar.module.css'

export default function navigationBar({name},{path}) {
    if(!path){
        console.log(name)
        path=""
    }
    
    return (
        <div className={styles.menu_link}>
            <title> {name +" - G.G.R"}</title>
            <ul>
                <li>
                    <Link href={path+'./'}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={path+'./games'}>
                        <a>Games</a>
                    </Link>
                </li>
                <li>
                    <Link href={path+'./sing_up'}>
                        <a>Sing up</a>
                    </Link>
                </li>
            </ul>
            <h1>{name}</h1>
        </div>
    )
}
/*
        <Link href={href}>
            <a className={styles.Link}>{text}</a>
        </Link>
*/