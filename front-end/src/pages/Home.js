function Home() {
    return (
        <div>
            <div className="alert alert-info alert-dismissible" role="alert">
                <div>
                    <div className="d-flex justify-content-between">
                        <strong>Health and Safety</strong>
                        <span type="button" className="close rounded btn-close" data-bs-dismiss="alert" aria-label="Close"><span aria-hidden="true"></span></span>
                    </div>
                    <div>The Museum requires vaccinations against COVID-19 through Sunday, March 27. Facial coverings continue to be required.</div>
                </div>
            </div>

            <div>
                <h1>Welcome!</h1>
                <h4>Discover over 18 dinosaurs!</h4>
                <img className="rounded mx-auto d-block" src="https://www.mydinosaurs.com/wp-content/uploads/2017/03/Yale-Peabody-Museum-2-600x400.jpg" alt="dinosaur display" />
            </div>
        </div>
    )
}

export default Home;