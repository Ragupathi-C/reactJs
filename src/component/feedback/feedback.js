import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '../menu/menu';
// import { faFaceFlushed, faFaceMeh, faFaceSadCry, faFaceSadTear, faLaugh } from '@fortawesome/free-regular-svg-icons';
import { faFaceFlushed, faFaceMeh, faFaceSadCry, faFaceSadTear, faLaugh } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export function Feedback() {
    return (
        <div>
            <Menu />
            <div className='container'>
                <div className='row feedback_maindiv'>
                    <div className='mx-auto feedback_div bg-light border shadow-lg'>
                        <h1 className='mt-5'>How satisfied are you with our customer support service?</h1>
                        <Link to="/thankyou"><FontAwesomeIcon icon={faFaceSadTear} className='emoji' /></Link>
                        <Link to="/thankyou"><FontAwesomeIcon icon={faFaceMeh} className='emoji' /></Link>
                        <Link to='/thankyou'><FontAwesomeIcon icon={faLaugh} className='emoji' /></Link>
                    </div>

                </div>

            </div>
        </div>
    )
}
