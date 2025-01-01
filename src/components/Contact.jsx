import React from 'react'
import toast from 'react-hot-toast';

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target
        const formData = new FormData(form);

        formData.append("access_key", "626ade64-6461-44ca-9972-1a992938fe52");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Message sent successfully!")
            form.reset()
        } else {
            toast.error("Failed to send the message!")
        }
    }

    return (
        <>
            <h1 className='text-center mt-5 fw-bold' id='contact' style={{ scrollMarginTop: '60px' }}>Contact Me</h1>
            <div className='container-fluid w-75 mt-4'>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" placeholder='Enter Your Name' required />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" placeholder='Enter Your Email' required />
                    </div>
                    <div className="mb-3">
                        <label for="mess" className="form-label">Message</label>
                        <textarea name="message" className='form-control' placeholder='Message...' required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </>
    )
}

export default Contact