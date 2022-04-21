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
            <div className="row">
                {dinosaurs.map((dinosaur, index)=>{
                    return (
                        // <div className={`order-md-${index} p-2 col-4`} key={dinosaur.id} >
                        <div className={`col-6 my-2`} key={dinosaur.id} >
                        {/* <div className={`col-6 bg-warning p-4`} style={{height: "300px"}} key={dinosaur.id} > */}
                            <Dinosaur dinosaur={dinosaur} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Dinosaurs;