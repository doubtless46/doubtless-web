import React from 'react'
import Box from "@mui/material/Box";
import Navbar from 'pages/components/Navbar'
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <section className='contact' id='contact' >
        <h2 className="Phead">Contact<span>Me!</span></h2>
          <form action="#">
            <div className='input-box'>
              <div className="input-field">
                <input type="text" className="text"  placeholder='Full Name'/>
                <span className='focus'></span>
              </div>
              <div className="input-field">
                <input type="text" placeholder='Email'/>
                <span className='focus'></span>
              </div>
            </div>
            <div className='input-box'>
              <div className="input-field">
                <input type="number" className="text"  placeholder='Mobile Number'/>
                <span className='focus'></span>
              </div>
              <div className="input-field">
                <input type="text" placeholder='Email Subject'/>
                <span className='focus'></span>
              </div>
            </div>
            <div className='textarea-field'>
              <textarea name="" id="" cols ="30" rows ="10" placeholder='Your Message'></textarea>
              <span className='focus'></span>
            </div>
            <Box sx={{ "& button": { m: 1 } }}>
              <Button variant="outlined" type="Submit" size="large" style={{ color: "#8ceef2" }}>
                Submit
              </Button>
            </Box>
          </form>
      </section>
    </div>
  )
}

export default Contact