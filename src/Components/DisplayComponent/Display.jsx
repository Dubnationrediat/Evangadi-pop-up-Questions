import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import './Display.css'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../Images/evangadi-logo-home.png'

import './Display.css'

function Display({imageDir}) {

  const [showFile, setShowFile] = useState(false);

  const handleDisplay = () => {
    setShowFile(!showFile); 
  };

  return (
    <>
      <Button className='m-2' onClick={handleDisplay} variant='secondary' >
        {showFile ? 'Hide Quick View' : 'Display Quick View'}
      </Button>
     {showFile && 
             <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img height={'500px'} width={'100%'} src={ExampleCarouselImage} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img height={'500px'} width={'100%'} src={ExampleCarouselImage} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img height={'500px'} width={'100%'} src={ExampleCarouselImage} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
     }
    </>
  );
}

export default Display



