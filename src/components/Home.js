import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './Home.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const handleClick = () => {

    }
    return(
        <div>
            <div  className='main'>

            </div>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>Welcome to Notes App</h1>
                        </div>
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default LandingPage;