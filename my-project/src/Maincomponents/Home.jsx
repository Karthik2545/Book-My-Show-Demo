import React from 'react'
import Nav from '../Components/Nav'
//import Slider from "react-slick";
import Hero from '../Sliders/Hero';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Posterslider from '../Sliders/Posterslider';
import Footer from '../Components/Footer';
import EntertainmentCardSlider from '../Components/Entertianment';

const Home = () => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(()=>{
    const reqrecommendedmovies=async ()=>{
      const getdata=await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=3db1dbafe3ecf718d7630982bfe105d0')
    setRecommendedMovies(getdata.data.results);
    }
    reqrecommendedmovies();
  },[])
  useEffect(()=>{
    const reqpopularmovies=async ()=>{
      const getdata=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3db1dbafe3ecf718d7630982bfe105d0')
    setPopularMovies(getdata.data.results);
    }
    reqpopularmovies();
  },[])
  useEffect(()=>{
    const requpcomingmovies=async ()=>{
      const getdata=await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3db1dbafe3ecf718d7630982bfe105d0')
    setUpcomingMovies(getdata.data.results);
    }
    requpcomingmovies();
  },[])
  return (
    <div>
      <div>
          <Hero/>
          <div className="container mx-auto px-4 md:px-12 my-8">
            <Posterslider
              title="Recommended Movies"
              subtitle="List of recommonded movies"
              posters={recommendedMovies}
              isDark={false}
            />
          </div>
          <div className="container h-70 p-4" style={{backgroundColor:"#778899"}}>
            <h1 className="text-2xl font-bold text-gray-800" style={{marginTop:"-10px"}}>
              The best of Entertainment
            </h1> 
            <EntertainmentCardSlider/>
          </div>

          <div className="container mx-auto px-4 md:px-12 my-8 pt-2">
            <Posterslider
              title="UpcomimgMovies"
              subtitle="Brand new releases every Friday"
              posters={upcomingMovies}
              isDark={false}
            />
          </div>
    
        <div className="container mx-auto px-4 md:px-12 my-8">
          <Posterslider
            title="Popular Movies"
            subtitle="All Time Favorite Movies"
            posters={popularMovies}
            isDark={false}
          />
        </div>
        <Footer/>
      </div>
    </div>

  )
}

export default Nav(Home)
// https://api.themoviedb.org/3/movie/popular?api_key=3db1dbafe3ecf718d7630982bfe105d0
// https://api.themoviedb.org/3/movie/top_rated?api_key=3db1dbafe3ecf718d7630982bfe105d0
// https://api.themoviedb.org/3/movie/upcoming?api_key=3db1dbafe3ecf718d7630982bfe105d0