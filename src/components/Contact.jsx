import React from 'react'

function Contact() {
    return (
        <>
            <h1 className='text-center mt-5 fw-bold' id='contact'>Contact Me</h1>
            <div className='container-fluid w-75 mt-4'>
                <form>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder='Enter Your Name' />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="mb-3">
                        <label for="mess" className="form-label">Message</label>
                        <textarea name="" id="mess" className='form-control' placeholder='Message...'></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact