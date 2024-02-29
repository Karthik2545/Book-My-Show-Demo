import React from 'react'
import Cast from './Cast';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movieslike from './Movieslike';

function SampleNextArrow(props) {
  const { className,onClick } = props;
  return (
    <div
      className={className}
      style={{backgroundColor:"#A9A9A9",marginTop:"-30px"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className,onClick } = props;
  return (
    <div
      className={className}
      style={{backgroundColor:"#A9A9A9",marginTop:"-30px"}}
      onClick={onClick}
    />
  );
}

const Movieinfocast = (props) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow:6,
    slidesToScroll:4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  const {posters}=props;
  return (
    <div>
      <>
      <div className="pl-6 pr-6">
        <h4 className='pl-2'>Cast</h4>
        <Slider {...settings} >
          {posters.map((each, index) => (
                <Cast {...each} key={index} />
              ))}
        </Slider>
        <Movieslike/>
      </div>
      </>
      
    </div>
  )
}

export default Movieinfocast
