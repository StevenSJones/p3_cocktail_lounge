import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../assets/images/vodka.png"
          alt="vodka"
        />
        <Carousel.Caption className="caption">
          <h3>Vodka</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../assets/images/gin.png"
          alt="gin"
        />

        <Carousel.Caption className="caption">
          <h3>Gin</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 responsive"
          src="../assets/images/rum.png"
          alt="rum"
        />

        <Carousel.Caption className="caption">
          <h3>Rum</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 responsive"
          src="../assets/images/tequila.png"
          alt="tequila"
        />

        <Carousel.Caption className="caption">
          <h3>Tequila</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 responsive"
          src="../assets/images/scotch.png"
          alt="scotch"
        />

        <Carousel.Caption className="caption">
          <h3>Scotch</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
