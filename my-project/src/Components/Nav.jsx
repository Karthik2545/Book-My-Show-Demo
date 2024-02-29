import React from 'react'
import { BiChevronDown,BiSearch} from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className='h-14 mt-3 w-full flex flex-row'>
      <div className=' flex place-items-baseline'>
        <img className='ml-16 mr-6 h-10 w-26'src="https://res.cloudinary.com/dulc7ullq/image/upload/v1708583883/bookmyshow_cblcni.png" alt="BMSLOGO"/>
      </div>
      <div className='flex w-3/6 mr-10 ml-1 h-8 border rounded'>
        <button className='pb-0.5 pl-2 pt-1 h-6 bg-white'><BiSearch className='w-6 font-bold'/></button>
        <input className='mr-42 w-5/6  h-6 ' type='search' placeholder='  Search for Movies,Events,Plays,Sports and Activites' />
      </div>
      <div className='flex'>
        <p className='text-gray-700'>Hyderabad</p>
        <BiChevronDown className='ml-6 w-4 h-6'/>
      </div>
      <div className='flex mt-0.5 ml-6'>
        <Button className="h-6 w-18 rounded-none" variant='danger'><p style={{marginTop:"-8px",padding:"1px"}}>Sign in</p></Button>
      </div>
      <div className='ml-7'>
        <button onClick={handleShow}><BiMenu size={31}/></button>
        <Modal style={{height:"500px",width:"280px",marginLeft:"870px",marginTop:"35px"}}  show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton className='h-12'>
            <Modal.Title>Hey!</Modal.Title>
          </Modal.Header>
          <div className='flex flex-column'>
            <Modal.Body style={{marginTop:"-5px"}}>Notifications</Modal.Body>
            <hr style={{marginTop:"-5px"}}/>
            <Modal.Body style={{marginTop:"-24px"}}>Your Orders</Modal.Body>
            <hr style={{marginTop:"-5px"}}/>
            <Modal.Body style={{marginTop:"-24px"}}>Play Credit Card</Modal.Body>
            <hr style={{marginTop:"-5px"}}/>
            <Modal.Body style={{marginTop:"-24px"}}>Help & Support</Modal.Body>
            <hr style={{marginTop:"-5px"}}/>
            <Modal.Body style={{marginTop:"-24px"}}>Rewards</Modal.Body>
            <hr style={{marginTop:"-5px"}}/>
            <Modal.Body style={{marginTop:"-24px"}}>Book a Smile</Modal.Body>
          </div>
        </Modal>
      </div>
    </div>
    </>
  )
}

const Nav=(Component)=>({...props})=>{
    return (
      <div>
      <Navbar/>
      <Component {...props}/>
      </div>
    )
  }

export default Nav
