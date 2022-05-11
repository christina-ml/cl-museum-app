import { Link } from "react-router-dom";

function Dinosaur({ dinosaur }) {
    return (
        <article className="col-md-6">
            <section className="p-3 border bg-light text-center">
                <Link to={`/dinosaurs/${dinosaur.id}`}>
                    <img id="card-img" src={dinosaur.image} alt={dinosaur.name} />
                </Link>
                <Link to={`/dinosaurs/${dinosaur.id}`} id="dino-list-links">
                    <h1>{dinosaur.name}</h1>
                </Link>
                <br />
                ({dinosaur.pronunciation}) - {dinosaur.meaning_of_name}
                <br />
                Diet: {dinosaur.diet}
                <br />
                Length: {dinosaur.length_in_meters} meters
                <br />
                Period: {dinosaur.period}
                <br />
                Museum Favorite? {dinosaur.is_favorite ? 'Yes': 'No'}
            </section>
        </article>
    )
}

export default Dinosaur;