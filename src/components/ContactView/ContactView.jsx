import React from 'react'
import "./ContactView.css"
function ContactView() {
    return (
        <div>
           
                    <div className="contact-form col-12">
                        <div className="contact-us col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            <div className='container'>
                                <h1 className='contact-head'>CONTACT</h1>
                                <p className='contact-des'>2nd floor, HiLITE Business Park,
                                    Thondayad, Bypass,    Thondayad, Bypass,
                                    Kozhikode, Kerala 673014</p>
                            </div>
                            <div className="container text-center">

                               
                                    <div >                                        
                                            <h6 className="email"><svg className="email-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                        </svg> thasnimjawad@gmail.com</h6>
                                        
                                    </div>
                                
                            </div>
                        </div>

                        <div className="form-list container col-xs-12 col-sm-12 col-md-6 col-lg-6">

                            <div>
                                <h3 className="form-title">Messages for us?</h3>
                            </div>

                            <form  action='https://script.google.com/macros/s/AKfycbxzJs8R2bL1Yi15qEj9wIFc2JldSJyL0dspuP7WRxIZF58BgXrcXOakwlNHNeKO_ZG_/exec' method='post'>
                                <div class="formbold-input-flex">
                                    <div>
                                        <input
                                            type="text"
                                            name="fullname"
                                            id="fullname"
                                            placeholder="Full Name"
                                            class="formbold-form-input"

                                        />
                                        <label for="firstname" class="formbold-form-label"> Full Name </label>
                                    </div>

                                </div>

                                <div class="formbold-input-flex">
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            class="formbold-form-input"
                                        />
                                        <label for="email" class="formbold-form-label"> Mail </label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone number"
                                            class="formbold-form-input"
                                        />
                                        <label for="phone" class="formbold-form-label"> Phone </label>
                                    </div>
                                </div>

                                <div class="formbold-textarea">
                                    <textarea
                                        rows="6"
                                        name="message"
                                        id="message"
                                        placeholder="Write your message..."
                                        class="formbold-form-input"
                                    ></textarea>
                                    <label for="message" class="formbold-form-label"> Message </label>
                                </div>

                                <button type='submit'  className="formbold-btn ">
                                    Send Message
                                </button>


                            </form>
                        </div>


                    </div>

            
        </div>
    )
}

export default ContactView