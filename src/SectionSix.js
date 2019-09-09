import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'



const SectionSix= ()=>{
    return(
        <Container> 
            <h2>latest</h2>
        <Row>
            <Col> 
                <div className="overlap">
                    <img
                        className="img-fluid"
                        src="images/Fence_1_394x.jpg"
                        alt="First slide"
                    /> 
                    <br/> 
                    <br/> 
                    <h3 className="lap">HEELS</h3>   
                </div>
             </Col>
            <Col> 
                <div  className="overlap">
                    <img
                        className="img-fluid" 
                        src="images/Dickies_Bodega_FP_394x.png"
                        alt="First slide"
                    /> 
                    <br/> 
                    <br/> 
                    <h3 className="lap">good</h3>
                </div>       
            </Col>
            <Col> 
                <div  className="overlap">
                    <img
                        className="img-fluid"
                        src="images/Polar_LK_2_394x.jpg"
                        alt="First slide"
                    /> 
                    <br/> 
                    <br/> 
                    <h3 className="lap">helo</h3>
                </div>  
            </Col>
        </Row>
        </Container>
    )
}

export default SectionSix