import React from 'react'
import PizzaLeft from '../images/pizzaLeft.jpg';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}></div>
        <div className="rightSide">
            <h1>Contact Us</h1>

            <form id="contact-form" method="POST">
                <label htmlFor="name">Name:</label>
                <input name="name" placeholder="Enter your name" type="text"/>

                <label htmlFor="e-mail">E-Mail:</label>
                <input name="e-mail" placeholder="Enter your E-mail" type="e-mail"/>

                <label htmlFor="message">Message:</label>
                <textarea rows="6" placeholder="Enter here" name="message" required></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact