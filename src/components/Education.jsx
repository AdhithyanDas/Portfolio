import React from 'react'
import Card from 'react-bootstrap/Card';

function Education() {
    return (
        <>
            <h1 className='text-center mt-5 fw-bold' id='education'>Education</h1>
            <div className='d-flex flex-wrap mt-4 justify-content-center gap-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>MEA(R)N Stack Web Development</Card.Title>
                        <Card.Text>
                            Luminar Technolab Calicut <br />
                            2024
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Bachelor of Computer Application (BCA)</Card.Title>
                        <Card.Text>
                            Yenepoya University Mangalore <br />
                            2021-24
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Education