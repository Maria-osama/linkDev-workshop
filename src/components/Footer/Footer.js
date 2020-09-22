import React from 'react';
import NavigationItem from '../Navigation/NavigationItem/NavigationItem';

const Footer = () => {
    return (
        <div className="footer">
            <div className=" container">
               
                <div className="row">
                    <div className="col-md-2">
                        <h6>Who We Are</h6>
                        <NavigationItem link="/" type="link">About Us</NavigationItem>
                        <NavigationItem link="/" type="link">Mission, Vission&Goals</NavigationItem>
                        <NavigationItem link="/" type="link">Our Message</NavigationItem>
                        <NavigationItem link="/" type="link">Board Of Trustees</NavigationItem>
                        <NavigationItem link="/" type="link">Board Of Directors</NavigationItem>
                        <NavigationItem link="/" type="link">FAQ's</NavigationItem>

                    </div>
                    <div className="col-md-2">
                        <h6>What We Do</h6>
                        <NavigationItem link="/" type="link">Research</NavigationItem>
                        <NavigationItem link="/" type="link">Programmes</NavigationItem>
                        <NavigationItem link="/" type="link">Collaborations</NavigationItem>
                        <NavigationItem link="/" type="link">in2Hc</NavigationItem>

                    </div>
                    <div className="col-md-2">
                        <h6>Get Involved</h6>
                        <NavigationItem link="/" type="link">Donate</NavigationItem>
                        <NavigationItem link="/" type="link">Partners</NavigationItem>

                    </div>
                    <div className="col-md-2">
                        <h6>Media Center</h6>
                        <NavigationItem link="/" type="link">Photo Gallery</NavigationItem>
                        <NavigationItem link="/" type="link">Video Gallery</NavigationItem>
                        <NavigationItem link="/" type="link">Social Media Hub</NavigationItem>
                        <NavigationItem link="/" type="link">Events</NavigationItem>

                    </div>
                    <div className="col-md-2">
                        <h6>Contact Us</h6>
                        <NavigationItem link="/" type="link">Contact Details</NavigationItem>
                        <NavigationItem link="/" type="link">Careers</NavigationItem>

                    </div>
                </div>
                <div className="subscribe">
                    <h6>Subscribe to our Newsletter</h6>
                    <input placeholder="Enter Your Email Address" />
                    <button>Subscribe</button>

                </div>
               
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <NavigationItem link="/" type="link">Terms & Conditions</NavigationItem>

                    <NavigationItem link="/" type="link">Privacy Policy</NavigationItem>

                    <NavigationItem link="/" type="link">User Agreement</NavigationItem>

                    <NavigationItem link="/" type="link">Sitemap</NavigationItem>
                    <p className="copyright">Copyright 2016 LinkDev. All Rights Reserved.</p>
                    <p className="w3c">
                    <a href="http://jigsaw.w3.org/css-validator/check/referer">
                        <img style={{ border: "0", width: "88px", height: "31px" }}
                            src="http://jigsaw.w3.org/css-validator/images/vcss"
                            alt="Valid CSS!" />
                    </a>
                </p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;