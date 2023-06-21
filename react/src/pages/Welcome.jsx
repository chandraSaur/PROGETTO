import {useState, useEffect} from "react"
import './welcome.css'
import logo from '../Assets/Woanderlist_Logo.png'

export function Welcome (){
    return (
        <div className="container">
            <img src={logo} alt="logo"/>
            <p>Registrati o effettua il login e inizia a programmare la tua vacanza.</p>
            <div className="login-signup">
                <LogSigButton url="https://localhost:3000/login" name='Login'/>
                <LogSigButton url="/signup" name='Signup'/>
            </div>
        </div>
    )
}

function LogSigButton({url, name}) {
    return(
        <a href={url}>{name}</a>
    )
}