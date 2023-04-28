import React from 'react'
import "./videoBar.css"
function videoBar() {
  return (
    <div>
        <div className="vodio-bar col-12">
            <div className="container">

            <div className="row">
                
             
                    <iframe  className=" video-view col-xs-12  col-sm-12 col-md-6"   src="https://www.youtube.com/embed/4hG9wI5-_Lc" title="8 Psychological Tricks That Actually Work"   ></iframe>

                <div className="notice-view col-xs-12 col-sm-12 col-md-6">
                    <h1 className='notice-title'>WHAT MAKES US UNIQUE</h1>
                    <h6 className='notice-des'>We aim to provide you with a better understanding of exponential technologies and their impact so that you can build a new mindset, stay relevant, and beat the competition.</h6>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default videoBar