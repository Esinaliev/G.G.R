import {useRouter} from 'next/router'
import A from '../../components/navigationBar'
import B from '../../components/GameInfo'

export default function () {
    const {query} = useRouter()
    return (
        <div>
            <div>
                <A path="../." name={query.id}/>
            </div>
            <B url={query.id}/>
        </div>
    )
}