import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row, Container } from 'reactstrap';
import award from '../../../assets/images/award.jpg'
import experience from '../../../assets/images/experience-bg.jpeg'

//import images
// import img1 from "../../../assets/images/companies/img-1.png";
// import img4 from "../../../assets/images/companies/img-4.png";
// import img5 from "../../../assets/images/companies/img-5.png";
// import avatar1 from "../../../assets/images/users/avatar-1.jpg";
// import avatar2 from "../../../assets/images/users/avatar-2.jpg";
// import avatar3 from "../../../assets/images/users/avatar-3.jpg";
// import avatar4 from "../../../assets/images/users/avatar-4.jpg";
// import avatar5 from "../../../assets/images/users/avatar-5.jpg";

const Experience = () => {
    return (
        <React.Fragment>
            <div className="page-content" >
                <div className="container-fluid">
                    <Col lg={12}>
                        <Card style={{backgroundImage:`url(${experience})`, backgroundSize:'cover'}}>
                            <CardBody className='text-white'>
                                <h5 className="mb-3">Work Experience</h5>

                                <p className="mb-4">During my 1.5 years of experience as a Node Js Developer, I have learnt about providing logical solutions in various projects and I am always open to learning about new inventions in the field.</p>

                                <ul className="verti-timeline list-unstyled">
                                    <li className="event-list">
                                        <div className="event-timeline-dot">
                                            <i className="bx bx-right-arrow-circle"></i>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-grow-1">
                                                <div>
                                                    <h6 className="font-size-14 mb-1"> BlockTech Brew , Chandigarh , India</h6>
                                                    <p>(March, 2023 - Present)</p>

                                                    <p className="mb-0">During my period of serving in BlockTech Brew, as Nodejs Developer, I have worked as backend for many projects- which included live projects as well. Besides, I have the following experience:</p>
                                                    <ul className="vstack gap-3 mt-2">
                                                        <li>
                                                            Worked on socket.io, to enable chats in one of the P2P related projects of the company.
                                                        </li>
                                                        <li>
                                                            Worked on storing files to AWS S3 bucket in another live project.
                                                        </li>
                                                        <li>
                                                            Worked on other AWS services like AWS Lambda, Cognito, etc.
                                                        </li>
                                                        <li>
                                                            Running migrations with MongoDb database.
                                                        </li>
                                                        <li>
                                                            Worked with swagger, to enable proper presentation of APIs for better understanding at the frontend.
                                                        </li>
                                                        <li>
                                                            Collaborated with metaverse projects to provide them APIs and store their data in mongoDb.
                                                        </li>
                                                        <li>
                                                            Used typescript for better clarity of the datatypes and to avoid bugs related to the same.
                                                        </li>
                                                        <li>
                                                            Creation of crypto wallets through backend for one of the blockchain related projects.
                                                        </li>
                                                        <li>
                                                            Enabled transaction of cryptocurrencies like ETH, SOL, TRX, MATIC, BNB between crypto wallets.
                                                        </li>
                                                        <li>
                                                            Usage of mercuryo for purchasing crypto from fiat money within the platform.
                                                        </li>
                                                        <li>
                                                            Usage of AMLBot for KYC verification in one of the projects.
                                                        </li>
                                                        <li>
                                                            Worked with Twilio for sending SMS to mobile phones.
                                                        </li>
                                                        <li>
                                                            Knowledge about in-app as well as push firebase notifications on mobile applications and websites.
                                                        </li>
                                                        <li>
                                                            Usage of Mailgun for sending emails to users on the platform.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </CardBody>
                        </Card>
                        <Row>
                            <Col lg={12}>
                                <h5 className="mb-3">Awards</h5>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12}>
                                <Card >
                                    <CardBody style={{
                                        backgroundImage: `url(${award})`,
                                        //  display: 'flex',
                                        // justifyContent: 'center',
                                        // alignItems: 'center',
                                         backgroundSize: 'cover',
                                        // height: '100vh',
                                        position: 'relative',
                                        paddingTop: '72.25%',
                                        height:'0',
                                        backgroundPosition: 'center', /* Centers the image */
                                        backgroundRepeat: 'no-repeat'
                                    }} className="image-card-body">
                                        {/* <img src={background} className='img-fluid mx-auto'></img> */}
                                        {/* <div> */}
                                        {/* <img src={background} className='img-thumbnail mx-auto d-block'></img> */}
                                        {/* <div className="flex-shrink-0 me-4">
                                                <div className="avatar-md">
                                                    <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                        <img src="" alt="" height="30" />
                                                    </span>
                                                </div>
                                            </div>


                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="text-truncate font-size-15"><Link to="#" className="text-dark">New admin Design</Link></h5>
                                                <p className="text-muted mb-4">It will be as simple as Occidental</p>
                                                <div className="avatar-group">
                                                    <div className="avatar-group-item">
                                                        <Link to="#" className="d-inline-block">
                                                            <img src='' alt="" className="rounded-circle avatar-xs" />
                                                        </Link>
                                                    </div>
                                                    <div className="avatar-group-item">
                                                        <Link to="#" className="d-inline-block">
                                                            <img src='' alt="" className="rounded-circle avatar-xs" />
                                                        </Link>
                                                    </div>
                                                    <div className="avatar-group-item">
                                                        <Link to="#" className="d-inline-block">
                                                            <div className="avatar-xs">
                                                                <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                                    A
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="avatar-group-item">
                                                        <Link to="#" className="d-inline-block">
                                                            <img src='' alt="" className="rounded-circle avatar-xs" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div> */}
                                        {/* </div> */}

                                        {/* <div className="position-relative">
                              <img
                                src={background}
                                alt=""
                                className="img-thumbnail"
                              />
                            </div> */}
                                    </CardBody>
                                    <div className="px-4 py-3 border-top align-items-center justify-content-center me-3 align-self-center">
                                        THE BUDDING STAR AWARD (2023)
                                        {/* <ul className="list-inline mb-0">
                                            <li className="list-inline-item me-3">
                                                <span className="badge bg-success">Completed</span>
                                            </li>{" "}
                                            <li className="list-inline-item me-3">
                                                <i className="bx bx-calendar me-1"></i> 15 Oct, 22
                                            </li>{" "}
                                            <li className="list-inline-item me-3">
                                                <i className="bx bx-comment-dots me-1"></i> 214
                                            </li>
                                        </ul> */}
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;
