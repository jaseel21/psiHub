import React from 'react'
import "./AboutUs.css"
function AboutUs() {
  return (
    <div>
        <div className="aboutUs">
            <div className="container">
            <div className="row">
                <div className="aboutUs-feild col-2">
                   

                    <h3 className='aboutUs-text col-2 '>ABOUT  US</h3>
                    </div>
               
                <div className="mission-feild  col-10">
                    <div className="container">

                    <div className="mission">
                    <h1 className='mission-title'>OUR MISSION</h1>
                    <h6 className='mission-des'>Transforming mindsets to explore the new opportunities brought by the digital revolution.</h6>
                    </div>
                    <div className="vision">
                    <h1 className='mission-title'>OUR VISION</h1>
                    <h6 className='mission-des'>Transforming mindsets to explore the new opportunities brought by the digital revolution.</h6>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs