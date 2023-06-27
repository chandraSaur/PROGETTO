import {useState, useEffect} from "react"
import './home.css'
import React from 'react';
import profilePic from '../Assets/patrick-stella.jpg'
import { Link } from "react-router-dom"


//l'indirizzo di questa pagina è: http://localhost:3000/home

export function Home() {
    return(
        <div className="homepage">
            <section className="user-section">
                <header>
                    <img src={profilePic} alt="profile"/>
                    <span>Patrick098</span>
                </header>
                <Link to='/home'>Home</Link>
                <Link to='/liste'>Liste</Link>
            </section>
            <section className="view">
                <header>
                    <span>Quale viaggio organizzeremo oggi?</span>
                    <button>+</button>
                </header>
            </section>
        </div>
    )
}
