import { Link } from "react-router-dom";

function Dinosaur({ dinosaur }) {
    return (
        // <div className="card p-4">
        <div className="text-center card border border-5" id="card-container">
            <div className="card-img-top mt-2" >
                <Link to={`/dinosaurs/${dinosaur.id}`}>
                    <img id="card-img" className="dino-image img-thumbnail" src={dinosaur.image} alt={dinosaur.name} />
                </Link>
            </div>
            <div className="card-body h-50">
                <div className="card-header">
                    <Link to={`/dinosaurs/${dinosaur.id}`} id="dino-list-links">
                        <h1>{dinosaur.name}</h1>
                    </Link>
                </div>
                <div className="card-text">
                    ({dinosaur.pronunciation}) - {dinosaur.meaning_of_name}
                </div>
                <div className="card-text">
                    Diet: {dinosaur.diet}
                </div>
                <div className="card-text">
                    Length: {dinosaur.length_in_meters} meters
                </div>
                <div className="card-text">
                    Period: {dinosaur.period}
                </div>
                <div className="card-text">
                    Museum Favorite? {dinosaur.is_favorite ? 'Yes': 'No'}
                </div>
            </div>
        </div>
    )
}

export default Dinosaur;