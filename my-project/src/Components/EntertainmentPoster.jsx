import React from 'react'
import { useParams } from 'react-router-dom';

const EntertainmentPoster = (props) => {
    const { id } = useParams();
    const {title,src,idd}=props
    console.log(id)
    console.log(typeof(id))
    console.log(idd)
    console.log(typeof(idd))
    if(id===idd)
        return (
            <div>
                        <div className='flex flex-column'>
                            <div className='mt-4 ml-28 mb-1'>
                                <h1 className='text-3xl font-bold' >{title}</h1>
                            </div>
                            <div className='h-full w-full mt-1'>
                                <img
                                    src={src}
                                    alt="poster"
                                    style={{height:"300px",width:"700px"}}
                                />
                            </div>
                        </div>
            
            </div>
        )
}

export default EntertainmentPoster
