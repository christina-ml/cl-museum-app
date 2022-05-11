import axios from "axios";
import { useState, useEffect } from "react";

// component
import Dinosaur from "./Dinosaur";

const API = process.env.REACT_APP_API_URL;

function Dinosaurs() {
    const [dinosaurs, setDinosaurs] = useState([]);
    useEffect(()=>{
        axios.get(`${API}/dinosaurs`)
            .then((res)=>{
                setDinosaurs(res.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, []);

    return (
        <div className="container">
            <div className="row g-3">
                {dinosaurs.map((dinosaur)=>{
                    return (
                        <Dinosaur dinosaur={dinosaur} key={dinosaur.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Dinosaurs;