import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col } from 'reactstrap';

const Sidebar = () => {
    return (
        <React.Fragment>
            <Col lg={3}>
                <Card>
                    <CardBody>
                        <ul className="list-unstyled vstack gap-3 mb-0">
                            <li>
                                <div className="d-flex mt-2">
                                    <i className='bx bx-calendar font-size-18 text-primary'></i>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-semibold">Experience:</h6>
                                        <span className="text-muted">1.5 Years</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <i className='bx bx-money font-size-18 text-primary'></i>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-semibold">Current Salary:</h6>
                                        <span className="text-muted">INR 3,00,000</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <i className='bx bx-money font-size-18 text-primary'></i>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-semibold">Expected Salary:</h6>
                                        <span className="text-muted">INR 6,00,000</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <i className='bx bx-user font-size-18 text-primary'></i>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-semibold">Gender:</h6>
                                        Female
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <i className='mdi mdi-book-education font-size-18 text-primary'></i>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-semibold">Qualification:</h6>
                                        <span className="text-muted">Post Graduate Diploma</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <i className='mdi mdi-google-translate font-size-18 text-primary'></i>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-semibold">Languages:</h6>
                                        <span className="text-muted">English, Hindi, Punjabi</span>
                                    </div>
                                </div>
                            </li>
                            <li className="hstack gap-2 mt-4">
                                <Link to="contact" className="btn btn-soft-danger w-100">Contact</Link>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default Sidebar;