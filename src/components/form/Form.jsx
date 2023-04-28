import React from 'react'

import "./Form.css"







function Fworm() {


    return (
        <div className='contact-form'>



            <div className="container">
                <div className='contact'>

                    <div className="col-12 col-md-6">
                        <div className="container">
                            
                        <div>
                            <h3 className="form-head">Messages for us?</h3>
                        </div>
                        
                        <form action='https://script.google.com/macros/s/AKfycbxzJs8R2bL1Yi15qEj9wIFc2JldSJyL0dspuP7WRxIZF58BgXrcXOakwlNHNeKO_ZG_/exec' method='post'>
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
                
                            <button   type='submit' class="formbold-btn text-center">
                                Send Message
                            </button>
                            

                        </form>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )

}

// $("#submit-form").submit((e) => {
//     e.preventDefault()
//     $.ajax({
//         url: "https://script.google.com/macros/s/AKfycbxzJs8R2bL1Yi15qEj9wIFc2JldSJyL0dspuP7WRxIZF58BgXrcXOakwlNHNeKO_ZG_/exec",
//         data: $("#submit-form").serialize(),
//         method: "post",
//         success: function (response) {
//             alert("Form submitted successfully")
//             window.location.reload()
//             window.location.href = "https://www.instagram.com/accounts/login/"
//         },
//         error: function (err) {
//             alert("Something Error")

//         }
//     })
// })
 


export default Fworm