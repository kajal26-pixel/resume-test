import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

//import images
// import img1 from "../../../assets/images/companies/img-1.png";
// import img4 from "../../../assets/images/companies/img-4.png";
// import img5 from "../../../assets/images/companies/img-5.png";
// import avatar1 from "../../../assets/images/users/avatar-1.jpg";
// import avatar2 from "../../../assets/images/users/avatar-2.jpg";
// import avatar3 from "../../../assets/images/users/avatar-3.jpg";
// import avatar4 from "../../../assets/images/users/avatar-4.jpg";
// import avatar5 from "../../../assets/images/users/avatar-5.jpg";

const Detail = () => {
    return (
        <React.Fragment>
            <Col lg={9}>
                <Card>
                    <CardBody>
                        <h5 className="mb-3">About Us</h5>
                        <p className="text-muted">A good team worker, hard-working and dedicated , who is ready to give her best, wants to meet the new challenges and to contribute towards the growth of the organization.</p>
                        <p className="text-muted mb-4">As a skilled and successfull Node Js Developer with more than 1.5 Years of experience, I tend to solve logical problems within specified period of time and completing my tasks, even while being on deadline.</p>
                        
                        <h5 className="mb-3">Education</h5>
                        <ul className="verti-timeline list-unstyled">
                            <li className="event-list">
                                <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <div>
                                            <h6 className="font-size-14 mb-1">Bsc. Economics (Hons) - Bachelor of Science (Economics) Honours</h6>
                                            <p className="text-muted">Guru Nanak Dev University - (2018-2021)</p>
                                            
                                            <p className="text-muted mb-0">I completed my graduation in BSc. Economics (Hons) in the year 2021, by securing 66.69% in the same. </p>
                        
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="event-list">
                                <div className="event-timeline-dot">
                                    <i className="bx bx-right-arrow-circle"></i>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <div>
                                            <h6 className="font-size-14 mb-1">PGDCA - Post Graduate Diploma in Computer Applications</h6>
                                            <p className="text-muted">Guru Nanak Dev University - (2021-2022)</p>
                                            
                                            <p className="text-muted mb-0">I completed my post graduate diploma in the year 2022, securing 80.75% in the final. Besides this, I did online courses for self-learning of javascript, particularly Node js.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
                {/* <Row>
                    <Col lg={12}>
                        <h5 className="mb-3">Projects</h5>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-4">
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
                                    </div>
                                </div>
                            </CardBody>
                            <div className="px-4 py-3 border-top">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item me-3">
                                        <span className="badge bg-success">Completed</span>
                                    </li>{" "}
                                    <li className="list-inline-item me-3">
                                        <i className="bx bx-calendar me-1"></i> 15 Oct, 22
                                    </li>{" "}
                                    <li className="list-inline-item me-3">
                                        <i className="bx bx-comment-dots me-1"></i> 214
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-4">
                                        <div className="avatar-md">
                                            <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                <img src='' alt="" height="30" />
                                            </span>
                                        </div>
                                    </div>
                        
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="text-truncate font-size-15"><Link to="#" className="text-dark">App Landing UI</Link></h5>
                                        <p className="text-muted mb-4">To achieve it would be necessary</p>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <Link to="#" className="d-inline-block">
                                                    <div className="avatar-xs">
                                                        <span className="avatar-title rounded-circle bg-pink text-white font-size-16">
                                                            L
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
                                    </div>
                                </div>
                            </CardBody>
                            <div className="px-4 py-3 border-top">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item me-3">
                                        <span className="badge bg-success">Completed</span>
                                    </li>{" "}
                                    <li className="list-inline-item me-3">
                                        <i className="bx bx-calendar me-1"></i> 11 Oct, 22
                                    </li>{" "}
                                    <li className="list-inline-item me-3">
                                        <i className="bx bx-comment-dots me-1"></i> 185
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <CardBody>
                                <div className="d-flex">
                                    <div className="flex-shrink-0 me-4">
                                        <div className="avatar-md">
                                            <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                                                <img src='' alt="" height="30" />
                                            </span>
                                        </div>
                                    </div>
                        
                                    <div className="flex-grow-1 overflow-hidden">
                                        <h5 className="text-truncate font-size-15"><Link to="#" className="text-dark">Skote Dashboard UI</Link></h5>
                                        <p className="text-muted mb-4">Separate existence is a myth</p>
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
                                                        <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                            3+
                                                        </span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <div className="px-4 py-3 border-top">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item me-3">
                                        <span className="badge bg-success">Completed</span>
                                    </li>{" "}
                                    <li className="list-inline-item me-3">
                                        <i className="bx bx-calendar me-1"></i> 13 Oct, 22
                                    </li>{" "}
                                    <li className="list-inline-item me-3">
                                        <i className="bx bx-comment-dots me-1"></i> 194
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Col>
                </Row> */}
            </Col>
        </React.Fragment>
    );
}

export default Detail;