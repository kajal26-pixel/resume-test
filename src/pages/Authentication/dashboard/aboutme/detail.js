import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';

const Detail = () => {
    return (
        <React.Fragment>
            <Col lg={9}>
                <Card>
                    <CardBody>
                        <h5 className="mb-3">About Me</h5>
                        <p className="text-muted">A good team worker, hard-working and dedicated , who is ready to give her best, wants to meet the new challenges and to contribute towards the growth of the organization.</p>
                        <p className="text-muted mb-5">As a skilled and successfull Node Js Developer with more than 1.5 Years of experience, I tend to solve logical problems within specified period of time and completing my tasks, even while being on deadline.</p>
                        
                        <h5 className="mb-4">Education</h5>
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
            </Col>
        </React.Fragment>
    );
}

export default Detail;
