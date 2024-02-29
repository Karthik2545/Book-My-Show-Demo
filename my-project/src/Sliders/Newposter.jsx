import React from "react";
import { Link } from "react-router-dom";

const Newposter = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start gap-2 px-1 md:px-3">
            <div className="h-40 md:h-80">
            <img
                src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                alt="poster"
                className="w-40 h-72 rounded-md"
            />
            <h3
            className={`text-lg font-bold pl-1 pt-1 ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}
            >
            {props.title}
            </h3>
            </div>
        </div>
    </Link>
  );
};

export default Newposter;
