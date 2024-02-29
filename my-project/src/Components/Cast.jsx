import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cast = (props) => {
  return(
    <>
          <div className="flex flex-col items-start pt-4">
              <div className="h-40">
              <img
                  src={`https://image.tmdb.org/t/p/original${props.profile_path}`}
                  alt="poster"
                  className=" pl-4 h-40 rounded-e-full"
              />
              </div>
          </div>
          <div>
              <h3 className="text-lg pl-4 font-bold text-gray-700 pt-2">
              {props.name}
              </h3>
              <p className="pl-4">{props.character}</p>
          </div>
      </>
  )
}

export default Cast;