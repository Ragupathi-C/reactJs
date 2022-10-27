import React from "react";
import './thankYouCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../menu/menu";

export function ThankYouCard() {
    return (
        <div>
            <Menu />
            <div className='container'>
                <div className='row thankyoucard_maindiv'>
                    <div className='mx-auto thankyoucard-body-div bg-info border shadow-lg'>
                        <FontAwesomeIcon icon={faHeart} className="heart" />
                        <h1>Thank You !</h1>
                        <h3>We will use your feedback to improve our sutomer support performance</h3>
                    </div>

                </div>

            </div>
        </div>
    );
}