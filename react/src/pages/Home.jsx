import {useState, useEffect} from "react"
import axios from 'axios'
import './home.css'
import profilePic from '../Assets/patrick-stella.jpg'
import { Link } from "react-router-dom"
import  Modal from "./modal"


//l'indirizzo di questa pagina è: http://localhost:3000/home

export function Home() {

    const [openModal, setOpenModal] = useState(false)
    const [trips, setTrips] = useState([])


    useEffect(() => {
        async function tripsCall(){
            const res = await axios.get('http://localhost:8000/home/trips')
            const tripNames = [];
            for (let i = 0; i < res.data.length; i++) {
            const trip = res.data[i];
            const tripName = trip.tripName;
            tripNames.push(tripName);
            }
            setTrips(tripNames)
        }
        tripsCall()
    }, [])

    return(
        <div className="homepage">
            <section className="user-section">
                <header>
                    <img className="profilePic" src={profilePic} alt="profile"/>
                    <span>Patrick098</span>
                </header>
                <details>
                    <summary><Link to='/home'>Home</Link></summary>
                    {
                        trips.map((t) =>
                            <li><Link>{t}</Link></li>
                        )
                    }
                </details>
                <Link to='/liste'>Liste</Link>
            </section>
            <section className="view">
                <header>
                    <span>Quale viaggio organizzeremo oggi?</span>
                </header>
                <ul>
                    {
                        trips.map((t,i) =>
                            <li key={i}>{t}</li>
                        )
                    }
                </ul>
                <button className="openModalBtn" onClick={() => {setOpenModal(true)}}>+</button>
            </section>
            {openModal && <Modal closeModal={setOpenModal}/>}
        </div>
    )
}


