import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Nav from '../Components/Nav';
import Movieinfo from '../Components/Movieinfo';
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';
//import Movieinfocast from '../Components/Movieinfocast';


const Movie = () => {
  const { id } = useParams();
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  //const [cast, setCast] = useState([]);

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
  // useEffect(() => {
  //   const requestCast = async () => {
  //     const getCast = await axios.get(`https://api.themoviedb.org/3//movie/${id}/credits?api_key=3db1dbafe3ecf718d7630982bfe105d0`);
  //     setCast(getCast.data.cast);
  //   };
  //   requestCast();
  // }, [id]);

  return (
    <div>
      <Nav/>
      <Movieinfo posters={recommendedMovies} id={id}/>
      <Movieinfo posters={popularMovies} id={id}/>
      <Movieinfo posters={upcomingMovies} id={id}/>
      <Footer/>
    </div>

  )
}

export default Nav(Movie)
