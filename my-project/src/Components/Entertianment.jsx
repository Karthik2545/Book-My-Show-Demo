import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


const Entertainment= (props) => {
  const {id}=props
  return (
    <Link to={`/plays/${id}`}>
      <div>
        <img
          className="pl-3 w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </Link>
  );
};


const EntertainmentCardSlider = () => {
  const { content } = require("../Entertainment.json");

  // const EntertainmentImage = [
  //   "https://res.cloudinary.com/dulc7ullq/image/upload/v1708952642/workshop-and-more-web-collection-202211140440_nof5ws.avif",
  //   "https://res.cloudinary.com/dulc7ullq/image/upload/v1708953000/music-shows-collection-202211140440_yg7z55.avif",
  //   "https://res.cloudinary.com/dulc7ullq/image/upload/v1708953000/comedy-shows-collection-202211140440_chxggb.avif",
  //   "https://res.cloudinary.com/dulc7ullq/image/upload/v1708953002/arts-crafts-collection-202211140440_rocxi6.avif",
  //   "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png",
  //   "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png",
  //   "https://res.cloudinary.com/dulc7ullq/image/upload/v1708953000/upskill-collection-202211140440_cpupkw.avif",
  //   "https://res.cloudinary.com/dulc7ullq/image/upload/v1708953000/interactive-games-collection-202211140440_ykhesp.avif",
  //   "https://res.cloudinary.com/dulc7ullq/image/upload/v1708953001/kids-zone-collection-202211140440_pi9axv.avif",
  // ];

  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {content.map((item) => (
          <Entertainment src={item.src} id={item.id} />
        ))}
      </Slider>
    </>
  );
};

export default EntertainmentCardSlider;