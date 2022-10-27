import React from "react";
import './card.css';
import profile from './17BME320.jpg';
import watchImg from './smartWatch.png'
import { Menu } from "../menu/menu";

export function Congrates() {
    return (
        <div>
            <Menu />
            <div className="parentdiv">
                <div className="profilebody">
                    <div className="profilediv">
                        <img src={profile} className='profileimg'></img>
                    </div>
                    <h1>Ragupathi.C</h1>
                    <div>
                        <h3>Congrats for winning a smartwatch</h3>
                    </div>
                    <div className="watchdiv">
                        <img src={watchImg} className='watch'></img>
                    </div>
                </div>

            </div>
        </div>

    )
}