import React from 'react'
import "../styles/section.css"
import { ArrowRight} from 'lucide-react';
import it_services from "../assets/it-services.jpg"
import itservice from "../assets/itservice2.png"


const Section = () => {

  const service = () => {
    window.open('https://www.itsolutions4u.co/services', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='dark-section'>

    <div className='dark-bg'>
        <div className='dark-content'>
        <h1>
        Fueling your success through IT innovation.
        </h1>
        <p>
        Experience the revolution of your business landscape with our innovative IT solutions, igniting growth and efficiency. From seamless integrations to strategic guidance, we empower your digital journey, driving transformative success.
        </p>

        <button onClick={service} className='btn2'>Services<ArrowRight className='dark-ar' /></button>

        </div>

        <div className='dark-img'>

            <img src={itservice} alt="" />

        </div>



    </div>
      
    </div>
  )
}

export default Section
