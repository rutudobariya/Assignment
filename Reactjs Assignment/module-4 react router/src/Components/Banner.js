import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hero1 from '../../src/assets/img/hero-banner1.jpg'
import hero2 from '../../src/assets/img/hero-banner2.jpg'
import hero3 from '../../src/assets/img/hero-banner3.jpg'
function Banner() {
    return (<>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={hero3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>)
}
export default Banner;