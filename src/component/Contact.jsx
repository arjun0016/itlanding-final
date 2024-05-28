import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className='contact-section'>

    <div className='gray-bg'>

      <h1><u>Get In Touch</u></h1>
      <p>please feel free to get in touch anytime,whether for your work inquiries or just to say hi@mail.com </p>

    <form action="">
      <input type="text" name="name" id="" placeholder='Your Name' />
      <input type="email" name="email" id="" placeholder='Your Email' />
      <input type="text" name="message" id="" placeholder='Your Message'/>
      <button className="form-btn" type='submit'>Send</button>
    </form>


      

    </div>
      
    </div>
  )
}

export default Contact
