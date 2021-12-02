import React from 'react';
import './contact_us.css';

const ContactUs = () =>
{
    return(
        <div className="contactUs_section">
            <h1>Contact Us</h1>
            <div className="contact_us_container">
                <div className="left_container">
                    <div className="email_block">
                        <p>Email : </p>
                        <p><strong>abcd123@gmail.com</strong></p>
                    </div>
                    <div className="number_block">
                        <p>Mo. Number :</p>
                        <p> <strong>6762668728</strong></p>
                    </div>
                    <div className="address_block">
                        <p>Address : </p>
                        <p><strong>Gondia , Maharashtra 441902</strong></p>
                    </div>
                </div>
                <div className="right_container">
                    <form>
                        <input type="text" placeholder="Enter Name "/>
                        <input type="email" placeholder="Enter Email "/>
                        <input type="number" placeholder="Enter Mobile Number "/>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Write Message"></textarea>
                        <div className="send_btn">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;