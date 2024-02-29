import React from 'react'
import Nav from '../Components/Nav'
import PlayFilters from '../Components/PlayFilters';
import EntertainmentPoster from '../Components/EntertainmentPoster';

const Play= () => {
  const { content } = require("../Entertainment.json");
  return (
    <>
    <div className="flex flex-row " style={{backgroundColor:"whitesmoke",height:"100%",width:"100%"}}>
      <div className="flex flex-column w-1/3 p-4 rounded" style={{backgroundColor:"whitesmoke"}}>
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <div className='bg-white h-full p-2 mb-2.5'>
            <PlayFilters
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          {/* <br style={{paddingTop:"-5px"}}/> */}
          <div className='bg-white h-full p-2 mb-2.5'>
            <PlayFilters title="Languages" tags={["English", "Kannada", "Hindi", "Telgu"]} />
          </div>
          <div className='bg-white h-full p-2 mb-2.5'>
            <PlayFilters title="Categories" tags={["Education", "Arts and Crafts", "Painting", "Dance","Music","Theatre"]} />
          </div>
          <div className='bg-white h-full p-2 mb-2.5'>
            <PlayFilters title="More Filters" tags={["Outdoor Events", "Fast Filling", "Online Streaming"]} />
          </div>
          <div className='bg-white h-full p-2 mb-2.5'>
            <PlayFilters title="Price" tags={["0-100", "100-500", "500-1500", ">1500"]} />
          </div>
      </div>
      {content.map((image,index) => (
          <EntertainmentPoster src={image.src1} idd={image.id} title={image.title} key={index} />
        ))}
    </div>
    </>
  );
};

export default Nav(Play)
