import React from 'react';
import { FaMobileAlt,FaMapMarkedAlt } from "react-icons/fa";
import { BsClock} from "react-icons/bs";
import './Address.css'

const Address = () => {
    return (
        <div className='address_section'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12" style={{ backgroundColor: "#3985B9" }}>
                        <div className=' py-5 px-4 text-white' >
                            <FaMapMarkedAlt className='address_icon'/>
                            <h5>Our Location</h5>
                            <p>Doctoral Medical center, 123 Main Street <br />
                                Your City, State Country.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12" style={{ backgroundColor: "#1F76B0" }}>
                        <div className=' py-5 px-4 text-white'>
                            <FaMobileAlt className='address_icon'/>
                            <h5>Phone, Fax & Email</h5>
                            <p>Mobile: <span className='ms-2'>+808123444, +123440005</span> </p>
                            <p>Fax: <span className='ms-2'>+2005444, +0035580</span></p>
                            <p>Email: <span className='ms-2'>info@doctoral.net</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12" style={{ backgroundColor: "#0767A7" }}>
                        <div className=' py-5 px-4 text-white'>
                            <BsClock className='address_icon'/>
                            <h5>Opening hours</h5>
                            <p>Monday - Friday: <span className='ms-2'> 8.00 - 18.00</span></p>
                            <p>Saturday: <span className='ms-2'>10.00 - 18.00</span></p>
                            <p>Sunday: <span className='ms-2'>10.00 - 18.00</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;