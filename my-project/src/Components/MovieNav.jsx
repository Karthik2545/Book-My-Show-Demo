import React, { Component } from 'react'

const MovieNav = (Component) =>({...props}) =>{
  return (
    <div>
    <MovieNav/>
    <Component {...props}/>
    <h1>Footer</h1>
    </div>
  )
}

export default MovieNav
