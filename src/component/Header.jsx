import React from 'react'
import '../styles/header.css'
import logo from "../assets/logo_white.png"
import it_services from "../assets/it-services.jpg"
import { PhoneCall} from 'lucide-react';


const Header = () => {

  const itpage = () => {
    window.location.href = 'tel:+971556449916'
  };
  const service = () => {
    window.open('https://www.itsolutions4u.co/contact', '_blank', 'noopener,noreferrer');
  };
  

  return (
    <>
    <div className='blue-bg'> 

        <div className=' blue-content'>
        <img src={logo} width={300} height={120}  alt="" />     

            <h1>Empowering Abu Dhabi's <br/> Tech Evolution.</h1>
            <p>Providing customized IT solutions to boost your business  <br />
            performance and make operations more efficient.</p>

            <div className='blue-btn'>
            <button onClick={itpage} className='btn1'>Call <PhoneCall className='bl-clr' /></button>
            <button onClick={service} className='btn2'>Contact Us</button>
            </div>
            </div>

            <div className='blue-img'>
            <img src={it_services} alt="" />

        </div>

       

    </div>      


    </>
  )
}

export default Header
