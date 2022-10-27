import { React, useState } from 'react';
import './fruitsCounter.css';
import 'bootstrap/dist/css/bootstrap.css'
import mango from './mango.jpg';
import banana from './banana.jpg';
import { Menu } from '../menu/menu';

export function FruitCounter() {
    const [mangoes, setmangoes] = useState(0);
    const [bananas, setbananas] = useState(0);
    return (
        <div>
            <Menu />
            <div className='container bg-warning'>
                <div className='row justify-content-center'>
                    <h1>Bob ate <span> {mangoes} </span>mangoes<span> {bananas} </span>bananas</h1>
                </div>
                <div className='row '>
                    <div className='col-lg-6 '>
                        <img src={mango} className="img-fluid col-lg-12 mango "></img>
                        <button onClick={() => { setmangoes(mangoes + 1) }} className="btn btn-info mangoBtn">Eat mango</button>

                    </div>
                    <div className='col-lg-6 '>
                        <img src={banana} className="col-lg-12 banana"></img>
                        <button onClick={() => { setbananas(bananas + 1) }} className="btn btn-info bananaBtn">Eat Banana</button>
                    </div>


                </div>
            </div>
        </div>
    );
}