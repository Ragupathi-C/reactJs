import React from "react";
import './techCard.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from './Data-Scientist.webp';
import iot from './IOT-Developer.png';
import ml from './Ml-Engineer.png';
import vr from './VR-Developer.webp';
import { Menu } from "../menu/menu";

export function TechCard() {
    return (
        <div>
            <Menu />
            <div className="container-fluid ">
                <div className="row justify-content-center bg-warning col-12">
                    <h1 className="text-primary">Learn 4.0 Technologies</h1>
                    <p>Industry 4.0 is revolutionizing the way companies manufacture, improve and distribute their products. Manufacturers are integrating new technologies, including Internet of Things (IoT), cloud computing and analytics, and AI and machine learning into their production facilities and throughout their operations.</p>
                    <div className="col-lg-8">


                    </div>
                    <div className="row col-lg-12 justify-content-center ">
                        <div className="col-lg-5  border-top border-primary rounded mr-2 mb-2 bg-light">

                            <h1>Data Scientist</h1>
                            <p>A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions.</p>
                            <div >
                                <img src={data} ></img>
                            </div>

                        </div>
                        <div className="col-lg-5 border-top border-info rounded mb-2 mr-2 bg-light">
                            <h1>IOT Developer</h1>
                            <p>IoT Developers are professionals who can develop, manage, and monitor IoT devices and systems by combining three core components – data, technology, and research.</p>
                            <div >
                                <img src={iot} />
                            </div>

                        </div>
                    </div>

                    <div className="row col-lg-12 justify-content-center ">
                        <div className="col-lg-5  mr-2 border-top border-danger rounded bg-light mb-2">
                            <h1>ML Engineer</h1>
                            <p>A machine learning engineer (ML engineer) is a person in IT who focuses on researching, building and designing self-running artificial intelligence (AI) systems to automate predictive models.</p>
                            <div >
                                <img src={ml} />
                            </div>

                        </div>
                        <div className="col-lg-5 border-top border-success rounded bg-light mb-2 mr-2">
                            <h1>VR Engineer</h1>
                            <p>A VR developer creates whole new digital settings that users can see through a device like the Oculus headset, but an AR developer uses mobile apps to create a layer of digital experience in our reality, such as Pokemon Go, a game that uses this technology</p>
                            <div>
                                <img src={vr} />
                            </div>

                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
}