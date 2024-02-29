import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import NewPosterslider from '../Sliders/NewPosterslider';

const Movieslike = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(()=>{
      const reqpopularmovies=async ()=>{
        const getdata=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3db1dbafe3ecf718d7630982bfe105d0')
      setPopularMovies(getdata.data.results);
      }
      reqpopularmovies();
    },[])
  return (
    <div>
        <div className="my-8">
           <NewPosterslider
             title="You Might also Like"
             posters={popularMovies}
             isDark={false}
           />
         </div>
    </div>
  )
}

export default Movieslike
