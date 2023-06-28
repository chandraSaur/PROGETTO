import React from 'react';
import {useState, useEffect} from "react"
import { Input } from '../components/input';
import { ButtonGradient } from '../components/button';
import './modal.css'
import './welcome.css'


export default function Modal({closeModal}) {
    return (
        <section className='modalBg'>
            <div className='modalContainer'>
                <div className='closeBtn'>
                    <button onClick={()=> closeModal(false)}>x</button>
                </div>                
                <span>Il tuo prossimo viaggio</span>
                <form>
                    <Input placeholder="Dove vuoi andare?" />
                    <section className='date'>
                        <label htmlFor="dal">Dal:</label>
                        <Input type="date" name="dal" />
                        <label htmlFor="al">Al:</label>
                        <Input type="date"/>
                    </section>
                    <ButtonGradient name="Crea"/>
                </form>
            </div>
        </section>
    )
}

//prossimo step: onClick del crea per creare il viaggio nel db con insertTrip. 