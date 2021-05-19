import A from '../components/navigationBar'

const Index = () => {
    return (
        <div>
            <div>
                <A name="Sing up"/>
            </div>
            <div className="login">
                <h2>Log in</h2>
                <input type="text" placeholder="login"></input><br/>
                <input type="text" placeholder="password"></input><br/>
                <button>Sing up</button>
            </div>
        </div>
    )
}

export default Index;