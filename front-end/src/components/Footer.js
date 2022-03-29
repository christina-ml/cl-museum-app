import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <h4>
                This is Footer.js
            </h4>
            
            <div className="container">
                <h5 className="container-title">Dinosaur Museum</h5>
                <div className="row">
                    <div className="col-sm">
                        <div>
                            <ul>
                                <li>Dinosaur Museum</li>
                                <li>200 Dinosaur Way</li>
                                <li>New York, NY 10024</li>
                                <li>555-555-DINO</li>
                            </ul>
                        </div>
                        <p>
                            Open Wednesday - Sunday, 10:00 am - 5:30 pm.
                        </p>
                        <div>
                            Directions
                        </div>
                    </div>
                    <div className="col-sm">
                        <ul>
                            <li>About the Museum</li>
                            <li>Contact Us</li>
                            <li>Accessibility</li>
                            <li>Visitor Information</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul>
                            <li>Careers</li>
                            <li>Press Center</li>
                            <li>Host an Event</li>
                            <li>Videos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;