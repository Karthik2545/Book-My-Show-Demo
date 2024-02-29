import React from 'react'
import { TiSocialFacebook,TiSocialInstagram,TiSocialTwitter,TiSocialYoutube,TiSocialPinterest,TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
        <div className="flex flex-column  place-items-center h-40" style={{backgroundColor:"#778899",width:"100%"}}>
            <img className='h-14 w-22 mt-2'src="https://res.cloudinary.com/dulc7ullq/image/upload/v1708583883/bookmyshow_cblcni.png" alt="BMSLOGO"/>
            <div className='flex gap-2' style={{marginTop:"-3px"}}>
                <TiSocialFacebook className='size-6'/>
                <TiSocialInstagram className='size-6'/>
                <TiSocialTwitter className='size-6'/>
                <TiSocialYoutube className='size-6'/>
                <TiSocialPinterest className='size-6'/>
                <TiSocialLinkedin className='size-6'/>
            </div>
            <div className='flex flex-column place-items-center'>
                <p style={{paddingTop:"2px"}}>Book Your Show and Enjoy</p>
                <p style={{marginTop:"-16px"}}>Enjoyment is an incredible energizer to the human spirit</p>
            </div>

            

        </div>
      
    </div>
  )
}

export default Footer
