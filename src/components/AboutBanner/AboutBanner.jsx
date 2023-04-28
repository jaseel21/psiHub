import React from 'react'
import "./AboutBanner.css"
function AboutBanner() {
  return (
    <div>
        <div className="AboutBanner">
          <div className="container">

            <div className="row">
             

                <div className="f-part col-xs-12 col-sm-12 col-md-6">
                  <div className="content">
                    <h1 className='a-title'>Title</h1>
                    <h6 className='a-description'>The future is unpredictable. But that doesn't mean we can't prepare for it. At Edapt, we believe that education should equip everyone 
                      with the skills and knowledge they need to thrive in an ever-changing world.</h6>
                  </div>
               

              </div>
                <div className="s-part col-xs-12 col-sm-12 col-md-6">
                  
                    <img className='backgroundImg' src="https://blog.authenticjourneys.info/wp-content/uploads/2013/08/what-is-a-group-discussion.jpg" alt="" />
                  
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutBanner