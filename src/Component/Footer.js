import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Footer.css"

const Footer = () => {
    return (
        <div>
            <div className="container footerr">
                <div className="row text-center">
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div>
                            <Link to="search">Search</Link><br />
                            <Link to="aboutus">About Us</Link><br />
                            <Link to="#">Contact Us</Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Link to="#">Terms & Conditions</Link><br />
                        <Link to="#">Shipping & Delivery</Link><br />
                        <Link to="#">Cancellation & Refunds</Link>
                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Link to="#"> Facebook</Link><br />
                        <Link to="#">Instagram</Link><br />

                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <div className=''>
                            <p className='p-0 m-0'>© 2024, The Ooty</p>
                            <p className='p-0 m-0'>Chocolates</p>
                            <p className='p-0 m-0'>#Ahmedabad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
