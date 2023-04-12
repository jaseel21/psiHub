import React from 'react'
import Header from '../../header/header'
import Carousel from '../../carousel/carousel'
import Courses from '../../courses/courses'
import Form from "../../form/Form"
import Footer from '../../Footer/Footer'
function Main() {
  return (
    <div>
          <Header/>
   <Carousel/>
   <Courses/>
   <Form/>
   <Footer/>
    
    </div>
  )
}

export default Main