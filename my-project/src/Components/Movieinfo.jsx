import React from 'react'
//import Cast from './Cast'
import Movieposter from './Movieposter'

const Movieinfo = (props) => {
  return (
    <div>
      <>
        {props.posters.map((each, index) => (
                <Movieposter {...each} key={index} />
              ))}
      </>
    </div>
  )
}

export default Movieinfo
