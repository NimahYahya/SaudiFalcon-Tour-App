import React from 'react';
import '../style/Footer.css';
// import { FaTwitterSquare } from '@react-icons/all-files/fa/FaTwitterSquare';
import { FaSnapchat } from '@react-icons/all-files/fa/FaSnapchat';
import { FaGooglePlus } from '@react-icons/all-files/fa/FaGooglePlus';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';

function Footer() {
    return (
        // <div className="footer">
        //   <p>Made with ❤ copyright KAN team "Because We CAN" final project 2021.</p>
        //   {/* <div style={{ height: '200px' }}></div> */}
        //   <ul>
        //     <li>
        //       <FaTwitterSquare size={30} color={'#1da1f2'}></FaTwitterSquare>
        //     </li>
        //     <li>
        //       <FaInstagramSquare size={30} color={'#c32aa3'}></FaInstagramSquare>
        //     </li>
        //     <li>
        //       <FaGooglePlusSquare size={30} color={'#ea4335'}></FaGooglePlusSquare>
        //     </li>
        //     <li>
        //       <FaFacebookSquare size={30} color={'#3b5998'}></FaFacebookSquare>
        //     </li>
        //   </ul>
        // </div>
        <footer>
            <div className=" footer_style">
                <div className="row row_footer">
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Product</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Product 1
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Product 2
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Plans & Prices
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Frequently asked questions
                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Company</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About us
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Job postings
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    News and articles
                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-column">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="footer-title">Contact & Support</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link">
                                    <i className="fas fa-phone"></i>+47 45 80 80 80
                </span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-comments"></i>Live chat
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-envelope"></i>Contact us
                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fas fa-star"></i>Give feedback
                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <i className="fas fa-ellipsis-h"></i>
                </div>

                <div className="row text-center row_footer">
                    <div className="col-md-4 box">
                        <p className="footer_copyright">
                            Made with ❤
              <span className="copyright quick-links">
                                Copyright &copy; Your Website &nbsp;
                {new Date().getFullYear()}.&nbsp;
              </span>
              By KAN team "Because We CAN" final project
            </p>
                    </div>
                    <div className="col-md-4 box">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#">
                                    <i>
                                        <FaFacebook size={30} color={'#1da1f2'}></FaFacebook>
                                    </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i>
                                        <FaGooglePlus size={30} color={'#ea4335'}></FaGooglePlus>
                                    </i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i>
                                        <FaSnapchat size={30} color={'#fffc00'}></FaSnapchat>
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 box">
                        <ul className="list-inline quick-links">
                            <li className="list-inline-item">
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
