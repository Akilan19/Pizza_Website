import React from 'react'
import MultiplePizzas from "../images/multiplePizzas.jpeg";
import '../styles/about.css';
import First from './First';

function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <First na="FOR THE LOVE OF PIZZA SINCE 1958" des="From day one, the Carney brothers could look their customers in the eye and promise them the finest pizza in town — because they knew the farmers who grew the ingredients, and they knew those farmers cared about quality. Since then, our farmers have grown right alongside us, and the ingredients we use are still our highest priority. No one loves pizza more than Pizza Hut. That’s why pizza is in our name — and always will be." />
        </div>
    </div>
  )
}

export default About