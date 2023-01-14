import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannerImg1 from "../../../assets/images/slider-a.jpg";
import bannerImg2 from "../../../assets/images/slider-b.jpg";
import bannerImg3 from "../../../assets/images/slider-c.jpg";

class BannerArea extends Component {
    render() {
        return (
            <>
               <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={bannerImg1}
                    alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={bannerImg2}
                    alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={bannerImg3}
                    alt="Third slide"
                    />
                   
                </Carousel.Item>
              </Carousel>
            </>
        );
    }
}

export default BannerArea;