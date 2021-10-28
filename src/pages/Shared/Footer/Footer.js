import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-link">
                    <div>
                        <h4>World Travel Inc.</h4>
                        <hr className="w-75" />
                        <p className="px-4">The <span className="text-primary">World Travel Inc.</span> started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.</p>

                    </div>
                    <div>
                        <h5 className="ms-4 mb-4">CONTACT INFO</h5>
                        <ul>
                            <li>167/B, Green Road, Mirpore, Dhaka, Bangladesh.</li>
                            <li>58956388 & 58954726</li>
                            <li>popular@bd.com</li>
                            <li>Contact</li>
                        </ul>

                    </div>
                    <div>
                        <h5 className="ms-4 mb-3">Quick Links</h5>
                        <ul>
                            <Link className="footer-ancor-link" to="/home"><li>Home</li></Link>
                            <Link className="footer-ancor-link" to="/services"><li>Services</li></Link>
                            <Link className="footer-ancor-link" to="/about"><li>About us</li></Link>
                            <Link className="footer-ancor-link" to="/contact"><li>Contact us</li></Link>
                            <Link className="footer-ancor-link" to="/"><li>Terms and Condition</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h5>Testimonials</h5>
                        {/* <hr />
                        <input className="mb-3 p-1" type="email" placeholder="Your email"/>
                        <input className="p-1" type="password" placeholder="your password" /> <br /><br /><button className="btn btn-warning">Submit</button> */}
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Profession</label>
                                <input type="text" class="form-control" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <hr />
                <p className="text-center mt-4">&copy; copyright by world travel - 2021</p>
            </footer>
        </div>
    );
};

export default Footer;