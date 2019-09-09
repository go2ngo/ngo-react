import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'



const SectionFive= ()=>{
    return(
        <Container className='Brands'> 
            <h2>Popular Brands</h2>
        <Row>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100"
                    src="images/Believe_LS_Tee_DuckBlue_Blush_4_large.jpg"
                    alt="First slide"
                /> 
            </Col>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100" 
                    src="images/tstripe.jpg"
                    alt="First slide"
                />         
            </Col>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100"
                    src="images/Swim_Shorts_Navy_1_large.jpg"
                    alt="First slide"
                />      
            </Col>
        </Row>
        <Row>
            <Col> 
                <h3>HEELS</h3>          
            </Col>
            <Col> 
                <h3>good</h3>          
            </Col>
            <Col> 
                <h3>step</h3>          
            </Col>
        </Row>
        <Row>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100"
                    src="images/Believe_LS_Tee_DuckBlue_Blush_4_large.jpg"
                    alt="First slide"
                /> 
            </Col>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100" 
                    src="images/tstripe.jpg"
                    alt="First slide"
                />         
            </Col>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100"
                    src="images/Swim_Shorts_Navy_1_large.jpg"
                    alt="First slide"
                />      
            </Col>
        </Row>
        <Row>
            <Col> 
                <h3>HEELS</h3>          
            </Col>
            <Col> 
                <h3>good</h3>          
            </Col>
            <Col> 
                <h3>step</h3>          
            </Col>
        </Row>
        </Container>
    )
}

export default SectionFive