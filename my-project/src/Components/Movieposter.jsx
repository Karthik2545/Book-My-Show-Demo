import React from 'react'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Movieinfocast from './Movieinfocast';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Paymentmodel from './Paymentmodel';

const Movieposter = (props) => {
    const { id } = useParams();
    const num=parseInt(id)
    const [cast, setCast] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const rentMovie = () => {
        setIsOpen(true);
        setPrice(99);
      };
    
    const buyMovie = () => {
        console.log("buy movie")
        setIsOpen(true);
        setPrice(999);
      };
    useEffect(() => {
        const requestCast = async () => {
          const getCast = await axios.get(`https://api.themoviedb.org/3//movie/${id}/credits?api_key=3db1dbafe3ecf718d7630982bfe105d0`);
          setCast(getCast.data.cast);
        };
        requestCast();
      }, [id]);
    if(props.id===num){
        return(
            <>
            <Paymentmodel setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
                <div className='flex flex-row'>
                    <div className='bg-state-700 w-1/3 h-96'>
                        <img
                            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                            alt="poster"
                            className='h-full w-96 p-8'
                        />
                    </div>
                    <div className='bg-state-300 w-2/3 h-96 flex flex-column pt-20 pl-4'>
                        <h1>{props.title}</h1>
                        <h4>{props.release_date}</h4>
                        <p>{props.overview}</p>
                        <div className='flex flex-row gap-2'>
                            <Button onClick={rentMovie} className='h-10 w-26' variant="danger">Rent $99</Button>
                            <Button onClick={buyMovie} className='h-10 w-26' variant="danger">Buy $199</Button>
                        </div>
                    </div>
                </div>
            <Movieinfocast posters={cast}/>
            </>

        )
    }
    }

export default Movieposter
