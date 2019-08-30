import React, {Component} from 'react'
import {Container, Row, Col, Carousel} from 'react-bootstrap'



const SectionThree= ()=>{
    return(
        <Container-grid>
            <h2>Popular Categories </h2>
        <Row>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100"
                    src="images/Believe_LS_Tee_DuckBlue_Blush_4_large.jpg"
                    alt="First slide"
                /> 
                <h3  className="over">SHORT</h3>
            </Col>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100" 
                    src="images/tstripe.jpg"
                    alt="First slide"
                />    
                <h3  className="over">HEELS</h3>       
            </Col>
            <Col  className="overlap"> 
                <img
                    className="d-block w-100"
                    src="images/Swim_Shorts_Navy_1_large.jpg"
                    alt="First slide"
                />   
                <h3  className="over">HEELS</h3>          
            </Col>
        </Row>
        </Container-grid>
    )
}

export default SectionThree