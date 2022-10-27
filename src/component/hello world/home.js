import React from "react";
import './home.css'
import { Menu } from "../menu/menu";

export function Home() {
    return (
        <div>
            <Menu />
            <div className="HomeDiv">
                <h1>Hello World!</h1>
            </div>
        </div>
    )
}