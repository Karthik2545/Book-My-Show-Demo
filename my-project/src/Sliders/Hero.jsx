import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dulc7ullq/image/upload/v1708588164/WhatsApp_Image_2024-02-22_at_13.17.03_efd94c23_ywxzsg.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dulc7ullq/image/upload/v1708588164/WhatsApp_Image_2024-02-22_at_13.18.06_db88b059_ko2qal.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dulc7ullq/image/upload/v1708588163/WhatsApp_Image_2024-02-22_at_13.16.05_f732c7d2_hmoizb.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}
export default Hero
