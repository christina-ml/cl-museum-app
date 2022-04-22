// import helper
import { Link } from "react-router-dom";
import newDate from "../helpers/newDate";

function Home() {
    return (
        <div id="home-page">
            <div className="alert alert-info alert-dismissible" role="alert">
                <div>
                    <div className="d-flex justify-content-between">
                        <strong>Health and Safety</strong>
                        <span type="button" className="close rounded btn-close" data-bs-dismiss="alert" aria-label="Close"><span aria-hidden="true"></span></span>
                    </div>
                    <div>
                        The Museum requires vaccinations against COVID-19 through {newDate()}. Facial coverings continue to be required.
                        <br/>
                    </div>
                </div>
            </div>

            <div class="jumbotron">
                <h1 class="display-4">Welcome!</h1>
                <p class="lead">Discover over 18 currently extinct dinosaurs!</p>
                <hr class="my-4" />
                <p>
                <img className="rounded mx-auto d-block" src="https://www.mydinosaurs.com/wp-content/uploads/2017/03/Yale-Peabody-Museum-2-600x400.jpg" alt="dinosaur display" />
                </p>
                <p class="lead text-center">
                    <Link to="/dinosaurs">
                        <a class="btn btn-outline-secondary btn-lg" role="button">Enter here</a>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Home;