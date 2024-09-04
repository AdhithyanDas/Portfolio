import React from 'react'
import './Project.css'

function Project() {
    return (
        <>
            <h1 className='text-center mt-5 fw-bold' id='projects'>Projects</h1>
            <div className='d-flex justify-content-center'>
                <div className='d-flex flex-wrap mt-4 justify-content-center gap-4 w-50 text-center '>
                    <div className="card card-project" style={{ width: "13rem", maxHeight: "9rem" }}>
                        <img src="https://1000logos.net/wp-content/uploads/2021/12/Micromax-logo.jpg" style={{ width: "100%", height: "100%" }} className="card-img-top card-img-1" alt="..." />
                        <div className="card-body card-project-body">
                            <a href="https://adhithyandas.github.io/Micromax_Clone/" className="btn btn-project btn-success">View Project</a>
                        </div>
                    </div>
                    <div className="card card-project" style={{ width: "13rem", maxHeight: "9rem" }}>
                        <img src="https://c4.wallpaperflare.com/wallpaper/945/535/698/nike-purple-wallpaper-preview.jpg" style={{ width: "100%", height: "100%" }} className="card-img-top card-img-1" alt="..." />
                        <div className="card-body card-project-body">
                            <a href="https://adhithyandas.github.io/Shoezy/" className="btn btn-project btn-success">View Project</a>
                        </div>
                    </div>
                    <div className="card card-project" style={{ width: "13rem", maxHeight: "9rem" }}>
                        <img src="https://cdn.wallpapersafari.com/37/99/cX02ug.jpg" style={{ width: "100%", height: "100%" }} className="card-img-top card-img-1" alt="..." />
                        <div className="card-body card-project-body">
                            <a href="https://adhithyandas.github.io/Carousel/" className="btn btn-project btn-success">View Project</a>
                        </div>
                    </div>
                    <div className="card card-project" style={{ width: "13rem", maxHeight: "9rem" }}>
                        <img src="https://c4.wallpaperflare.com/wallpaper/178/553/146/logo-football-soccer-fc-barcelona-barca-hd-wallpaper-preview.jpg" style={{ width: "100%", height: "100%" }} className="card-img-top card-img-1" alt="..." />
                        <div className="card-body card-project-body">
                            <a href="https://adhithyandas.github.io/Barcelona/" className="btn btn-project btn-success">View Project</a>
                        </div>
                    </div>
                    <div className="card card-project" style={{ width: "13rem", maxHeight: "9rem" }}>
                        <img src="https://wallpapers.com/images/hd/black-dominos-pizza-logo-92oyw0g8ewm7ydi5.jpg" style={{ width: "100%", height: "100%" }} className="card-img-top card-img-1" alt="..." />
                        <div className="card-body card-project-body">
                            <a href="https://adhithyandas.github.io/Dominos/" className="btn btn-project btn-success">View Project</a>
                        </div>
                    </div>
                    <div className="card card-project" style={{ width: "13rem", maxHeight: "9rem" }}>
                        <img src="https://media.istockphoto.com/id/849418084/vector/coffee-stamp-black.jpg?s=612x612&w=0&k=20&c=GLOP0vqxdE61pR-LOcQZrh9tQl86_dXC_-zIUQTfqp0=" style={{ width: "100%", height: "100%" }} className="card-img-top card-img-1" alt="..." />
                        <div className="card-body card-project-body">
                            <a href="https://adhithyandas.github.io/Coffe_Shop/" className="btn btn-project btn-success">View Project</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Project