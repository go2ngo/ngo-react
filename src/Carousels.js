import React, {Component} from 'react'
import {Carousel, Button} from 'react-bootstrap'


const Carousels = ()=>{
  return(
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carol1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Slay Like never before</h3>

          <p>swipe left</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carol2.jpg"
          alt="Forth slide"
        />

        <Carousel.Caption>
        <h3>Slay Like never before</h3>
        <button>second button</button>
          <p>swipe left</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carol3.jpg"
          alt="Forth slide"
        />
        <Carousel.Caption>
        <button>Slay Like never before</button>
          <p>swipe left</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/carol4.jpg"
          alt="Forth slide"
          
        />
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels
