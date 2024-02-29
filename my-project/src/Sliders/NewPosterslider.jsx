import React from 'react'
import Slider from 'react-slick'
import Newposter from './Newposter';

function SampleNextArrow(props) {
  const { className,onClick } = props;
  return (
    <div
      className={className}
      style={{backgroundColor:"#A9A9A9"}}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className,onClick } = props;
  return (
    <div
      className={className}
      style={{backgroundColor:"#A9A9A9"}}
      onClick={onClick}
    />
  );
}

const NewPosterslider = (props) => {
    const { posters, title,isDark, config } = props;
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      startIndex:2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <div className="flex flex-col items-start sm:ml-3 my-2">
          <h3
            className={`text-2xl font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {title}
          </h3>
        </div>
        {config && (
          <Slider {...config}>
            {posters.map((each, index) => (
              <Newposter {...each} isDark={isDark} key={index} />
            ))}
          </Slider>
        )}
        {!config && (
          <Slider {...settings}>
            {posters.map((each, index) => (
              <Newposter {...each} isDark={isDark} key={index} />
            ))}
          </Slider>
        )}
      </>
    );
  };

export default NewPosterslider
