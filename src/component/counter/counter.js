import React from "react";
import { useState } from 'react';
import { Menu } from "../menu/menu";
import './counter.css';

export function Counter() {
    const [Count, setCount] = useState(0);
    return (
        <div>
            <Menu />
            <div className="Parent">
                <h1>{Count}</h1>
                <div className="p-2">
                    <button className="btn btn-success mr-2 mb-3" onClick={() => setCount(Count + 1)} >Increment</button>
                    <button className="btn btn-danger mr-2 mb-3" onClick={() => setCount(Count * 0)} >Reset</button>
                    <button className="btn btn-warning mr-2 mb-3" onClick={() => setCount(Count - 1)} >Decrement</button>
                </div>
            </div>
        </div>

    )
}