import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0509475305444!2d73.78244687408747!3d20.006376322109393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba8cc3d1b63%3A0x4ea2c0f7c56d7749!2sAshok%20Stambh%2C%20Raviwar%20Karanja%2C%20Panchavati%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693544904447!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Ashok Stambh Nashik 420009</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> rajendranagare@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +917028502648</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact