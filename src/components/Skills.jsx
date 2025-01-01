import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <>
            <h1 className='text-center mt-5 fw-bold' id='skills' style={{ scrollMarginTop: '60px' }}>Skills</h1>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-wrap mt-4 justify-content-center gap-4 w-50 text-center '>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/css-programming-language-icon-symbol-logo-vector-_627.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-angular-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226070.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175138.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem" }} className='skill'>
                        <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" className="card-img-top" alt="..." />
                    </div>
                    <div style={{ width: "6rem", marginTop: "2vh" }} className='skill'>
                        <img src="https://static-00.iconduck.com/assets.00/nodejs-icon-2048x1254-fc24w6ld.png" className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills