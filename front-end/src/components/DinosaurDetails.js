import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function DinosaurDetails() {
    const [dinosaur, setDinosaur] = useState([]);
    const { id } = useParams();
    // previous and next dinosaurs
    let previousId = Number(id) - 1;
    let nextId = Number(id) + 1;

    useEffect(()=>{
        axios.get(`${API}/dinosaurs/${id}`)
            .then((res)=>{
                setDinosaur(res.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    }, [id]);


    return (
        <div className="card p-4 container">
            <div className="row">
                <div className="col">

                
            <h1>{dinosaur.name}</h1>
            <div className="text-center w-50" >
                <img className="img-fluid img-thumbnail" src={dinosaur.image} alt={dinosaur.name} />
            </div>
            <div>
                Dinosaur ID: {dinosaur.dinosaur_id}
            </div>
            <div>
                {dinosaur.pronunciation} - {dinosaur.meaning_of_name}
            </div>
            <div>
                Diet: {dinosaur.diet}
            </div>
            <div>
                Length: {dinosaur.length_in_meters} meters
            </div>
            <div>
                When it lived, it was during this period: {dinosaur.period}, approximately this million years ago: {dinosaur.mya}
            </div>
            <div>
                Description: {dinosaur.description}
            </div>
            <div>
                Is this dinosaur a favorite at the museum? {dinosaur.is_favorite ? 'Yes': 'No'}
            </div>
            <div className="row">
                <div className="col">
                    <Link to={`/dinosaurs/${previousId}`}>
                        <button>Previous Dinosaur</button>
                    </Link>
                </div>
                <div className="col">
                    <Link to={`/dinosaurs/`}>
                        <button>Back to all dinosaurs</button>
                    </Link>
                </div>
                <div className="col">
                    <Link to={`/dinosaurs/${nextId}`}>
                        <button>Next Dinosaur</button>
                    </Link>
                </div>
            </div>

                </div>
            </div>
        </div>
    )
}

export default DinosaurDetails;