import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div>
      <section className='contact' id='contact' >
        <h2 className="Phead">Contact<span>Me!</span></h2>
          <form action="#">
            <div className='input-box'>
              <div className="input-field">
                <input type="text"  placeholder='Full Name' required/>
                <span className='focus'></span>
              </div>
              <div className="input-field">
                <input type="text" placeholder='Email' required/>
                <span className='focus'></span>
              </div>
            </div>
            <div className='input-box'>
              <div className="input-field">
                <input type="" className="text"  placeholder='Mobile Number' required/>
                <span className='focus'></span>
              </div>
              <div className="input-field">
                <input type="text" placeholder='Email Subject' required/>
                <span className='focus'></span>
              </div>
            </div>
            <div className='textarea-field'>
              <textarea name="" id="" cols ="30" rows ="10" placeholder='Your Message' required></textarea>
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