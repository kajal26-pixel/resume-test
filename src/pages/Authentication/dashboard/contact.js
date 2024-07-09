import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row, Container, Button } from 'reactstrap';
import background from '../../../assets/images/socialmedia.png'

//import images
// import img1 from "../../../assets/images/companies/img-1.png";
// import img4 from "../../../assets/images/companies/img-4.png";
// import img5 from "../../../assets/images/companies/img-5.png";
// import avatar1 from "../../../assets/images/users/avatar-1.jpg";
// import avatar2 from "../../../assets/images/users/avatar-2.jpg";
// import avatar3 from "../../../assets/images/users/avatar-3.jpg";
// import avatar4 from "../../../assets/images/users/avatar-4.jpg";
// import avatar5 from "../../../assets/images/users/avatar-5.jpg";

const Contact = () => {
    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/kajal-sekhri', '_blank', 'noopener,noreferrer');
      };
    const handleInsta = () => {
        window.open("https://www.instagram.com/kazal_s26",'_blank', 'noopener,noreferrer');
    }
    const handleGmail = () => {
        window.location.href = 'mailto:sekhrikajal@gmail.com';
    }
    const handleTelegram = () => {
        window.open("https://t.me/kazal_s26");
    }
    return (
        <React.Fragment>
            <div className='account-pages container-fluid pt-sm-5'
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    backgroundImage:`url(${background})`,
                    backgroundSize: 'cover'
                }}
            > 
                 <Container fluid className="d-flex align-items-center justify-content-center h-100" >
                    <Row className="justify-content-center w-100" >
                        <Col xs={11} sm={9} md={7} lg={5} xl={4}>
                            <Card className="justify-content-center align-items-center" style={{ minHeight: '45vh' }}>
                                <CardBody className="border-bottom align-items-center">
                                    <h3 className="mt-5" style={{ textAlign: 'center' }} >Social Media</h3>
                                    <Row className="mt-5 gx-5">
 
                                        <Col xs={12} sm={6} className="mb-3">
                                            <Button className="btn btn-soft-success w-100" style={{height: '7vh', padding: '0.75rem 2rem' }} onClick={handleGmail}><i className="bx bxl-google me-1 align-middle"></i> Gmail</Button>
                                        </Col> 
                                        <Col xs={12} sm={6} className="mb-3"> 
                                            <Button className="btn btn-soft-info w-100" style={{height: '7vh', padding: '0.75rem 2rem' }} onClick={handleLinkedIn}><i className="bx bxl-linkedin me-1 align-middle mb-1"></i> Linked In</Button>
                                        </Col>



                                    </Row>
                                    <Row className="mt-4 gx-5" >


                                        <Col  xs={12} sm={6} className="mb-3">
                                            <Button className="btn btn-soft-primary w-100" style={{ height: '7vh', padding: '0.75rem 2rem' }} onClick={handleTelegram}><i className="bx bxl-telegram me-1 align-middle"></i> Telegram</Button>
                                        </Col>
                                        <Col  xs={12} sm={6} className="mb-3">
                                            <Button className="btn btn-soft-pink w-100" style={{height: '7vh', padding: '0.75rem 2rem' }} onClick={handleInsta}><i className="bx bxl-instagram me-1 align-middle"></i> Instagram</Button>
                                        </Col>



                                    </Row>
                                    {/* <Row>

                                        <Link to="#!" className="btn btn-soft-pink"><i className="bx bxl-instagram align-middle me-1"></i> Instagram</Link>
                                    
</Row> */}





                                    {/* <Link to="#!" className="btn btn-soft-success"><i className="bx bxl-whatsapp align-middle me-1"></i> Whatsapp</Link> */}

                                 </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>  
            </div>
        </React.Fragment>
    );
}

export default Contact;
