import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './styles.css';



const Landing = () =>
{
    return(
        <Container fluid>
            <Row>
                <Col md={ 12 }>
                    <h1>Landing!</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;