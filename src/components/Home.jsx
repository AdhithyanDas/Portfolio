import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Home() {
    return (
        <>
            <div className='container-fluid' id='home' style={{ minHeight: "70vh", scrollMarginTop: '60px' }}>
                <Row>
                    <Col sm={12} md={12}>
                        <div className='text-center mt-4 container-fluid'>
                            <img src="https://www.1lynx-solutions.com/wp-content/uploads/2022/09/Software-Development-2.png" style={{ width: "40vh", height: "37vh" }} alt="" />
                        </div>
                    </Col>
                    <Col sm={12} md={12}>
                        <div className='text-center mt-5 container-fluid'>
                            <h3 className='fw-bold'>I’m Adhithyan Das K</h3>
                        </div>
                    </Col>
                    <Col sm={12} md={12}>
                        <div className='mt-2 container-fluid text-center' style={{ maxWidth: "120vh" }}>
                            <h6 className='lh-lg'>A passionate and dedicated MERN Stack Software Developer. With a strong foundation in MongoDB, Express.js, React.js and Node.js. I specialize in building dynamic, scalable, and user-friendly web applications. My journey in web development has equipped me with a diverse skill set, allowing me to tackle complex challenges and deliver innovative solutions. </h6>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home