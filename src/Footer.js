import React, {Component} from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faYoutube, faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'



const Footer = ()=>{
    return(
        <div>
            <footer class="page-footer font-small stylish-color-dark pt-4">
            <div className='footer'> 
                  <Container className='container'>
                      <Row className='row'>
                          <Col className='col-3 mt-5 ml-0'>
                            <h5>About</h5>
                            <p className='col_p mt-3'>An Independent UK Skateboard retailer since '97 - Shop online and in-store for Skateboarding, Clothing, Shoes and More. </p>
                          </Col>

                          <Col className='col-2 mt-5'>
                            <h5>Store</h5>
                            <p className='col_p mt-3'>23 Albert Road
                                Southsea
                                PO5 2SE</p>
                          </Col>

                          <Col className='col-4 mt-5'> 
                            <h5>get  in touch</h5>
                                <p className='col_p mt-3'>Mon - Sat: 9:30am - 6pm / Sun: 11am - 4pm
                                    +44(0)2392 426 388
                                    shop@boredofsouthsea.co.uk
                                </p>
                          </Col>

                          <Col className='col-3 mt-5 ml-0'>
                              <div className='socialIcon'>
                                  <h5 className='social'>social<a href='https://www.youtube.com/channel/UCxya6bcojIPBrRjYvMNKziQ?view_as=subscriber' className='social youtube'>
                                      <FontAwesomeIcon icon={faYoutube} size ='1x' /></a>
                                      <a href='https://business.facebook.com/Go2Ngofashions/?business_id=479242682903581&ref=bookmarks' className='social facebook'>
                                      <FontAwesomeIcon icon={faFacebook} size ='1x' /></a>
                                      <a href='https://twitter.com/home?lang=en' className='social twitter'>
                                      <FontAwesomeIcon icon={faTwitter} size ='1x' /></a>
                                    </h5>
                                    <button className='button'>Newsletter sign up</button>
                              </div>
                          
                           </Col>
                      </Row>
                      <div>
                          <ul className='floating'>
                              <li>About</li>
                              <li>Delivery & Returns</li>
                              <li>Contact</li> 
                              <li>Terms & Conditions</li>
                              <li>Privacy</li>
                              <li>Cookies</li> 
                          </ul>
                      </div>
                      <div><h6>&copy;</h6></div>
                  </Container>
            </div>
            </footer>
        </div>
                        
    )
}

export default Footer