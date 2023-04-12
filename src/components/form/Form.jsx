import React from 'react'
import $ from 'jquery'
import "./Form.css"

import Form from 'react-bootstrap/Form';



function Fworm() {
    return (
        <div className='contact-form'>



            <div className="container">
                <div className='contact'>

                <div className="col-10">

                    <div>
                        <h3  className="form-head">Messages for us?</h3>
                    </div>
                    <Form id="submit-form" action=''>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="name" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label>Message
                            </Form.Label>
                            <Form.Control  type="text" placeholder="Message " />
                        </Form.Group>
                        
                       <div className='text-center'>

                        <button className='col-6 submit-btnn ' type='submit'>Submit</button>
                       </div>
        
                    </Form>
                </div>
                {
        $("#submit-form").submit((e) => {
            e.preventDefault()
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbxzJs8R2bL1Yi15qEj9wIFc2JldSJyL0dspuP7WRxIZF58BgXrcXOakwlNHNeKO_ZG_/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully")
                    window.location.reload()
                    window.location.href = "https://www.instagram.com/accounts/login/"
                },
                error: function (err) {
                    alert("Something Error")

                }
            })
        }
        )
    }
                </div>
            </div>

        </div>
    )
    
}


export default Fworm