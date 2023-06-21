import {useState, useEffect} from "react"
import './log-sig.css'
import logo from '../Assets/Woanderlist_Logo.png'
import paris from '../Assets/paris.jpeg'

export function Login() {
    return(
        <div>
            <div className="form-section"></div>
            <img src={paris} alt="parigi"></img>
        </div>
    )
}