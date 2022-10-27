import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
export function Effect() {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.json())
            .then((data) => {
                setDetail(data)
            })
    }, []);

    return (
        <div>
            {detail.map((value) => (
                <div className="container">
                    <div className="row bg-info ">
                        <div className="col-lg-3 p-2 mx-auto">
                            <div className="card shadow-lg bg-warning">
                                <div className="card-body ">
                                    <h1 className="card-title">{value.id}</h1>
                                    <p className="card-text">{value.title}</p>
                                    <p className="card-text"></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    );
}