import React from 'react'
import "./courses.css"

import { useState } from 'react'


function Courses() {
  const [first, setfirst] = useState(false)
  const [second, setSecond] = useState(false)
  return (

    <div>


      <div className="container">
        <div className="row">
          <div class="col-md-12">
            <div className="courses">

              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
              </svg>
              <h1 className='course-head' >Bespoken courses</h1>
              

              <p className='cd-description' >We offer you online & offline courses that let you learn
                by watching, listening, writing, and speaking with the help of curated audiovisual content tailor-made to your needs</p>
             
            </div>

          </div>
        </div>





      

          <div className="row">

            <div className="single-course col-xs-12 col-md-6 col-lg-4">
              <div onClick={() => setfirst(!first)} className="course-list">
                {

                console.log(first)
                }

                <div className="course">
                  <div className="container">
                    <div className="hq">
                      <div className="row">

                        <div className="each-course">
                          <div >

                            <h1 className='course-number'>01</h1>
                          </div>
                          <div >

                            <h4 className="course-name">Maid controling</h4>
                          </div>
                          <div >
                            {
                              first ?
                                <h2 className='course-icon'> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg></h2> : <h2 className='course-icon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">

<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
</svg></h2>
                            }

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {
                first ? <div className="c-description">
                  <div className="container">

                    <p>How to make React App Responsive using react-responsive?

                      BrowserStack
                      </p>
                  </div>
                </div> : null
              }
            </div>




            <div className="single-course col-xs-12 col-md-6 col-lg-4">
              <div onClick={() => setSecond(!second)} className="course-list">

                <div className="course">
                  <div className="container">
                    <div className="hq">
                      <div className="row">

                        <div className="each-course">
                          <div >

                            <h1 className='course-number'>02</h1>
                          </div>
                          <div >

                            <h4 className="course-name">Psycological move</h4>
                          </div>
                          <div >
                            {
                              second ?
                                <h2 className='course-icon'> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg></h2> : <h2 className='course-icon'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">

                                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg></h2>
                            }

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {
                second ? <div className="c-description">
                  <div className="container">

                    <p>How to make React App Responsive using react-responsive?

                      BrowserStack
                       ‎Using Media Queries · ‎Responsive Grids</p>
                  </div>
                </div> : null
              }
            </div>
          </div>
       
      </div>






    </div>



  )
}

export default Courses