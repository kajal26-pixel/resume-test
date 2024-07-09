import React from 'react';
import PropTypes, { element, func } from "prop-types"
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import image from "../../../../assets/images/unnamed.jpg";
import resume from "../../../../assets/images/Resume.pdf"

//import images 
// import avatar from "../../../assets/images/users/avatar-6.jpg";
import Detail from './detail';
import Sidebar from './sidebar';
import { withTranslation } from "react-i18next"
import "flatpickr/dist/themes/material_blue.css"

const Aboutme = props  => {
    const handleClick = () => {
        const pdfUrl = resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume_kajal.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <React.Fragment>
            <div className="page-content ">
                <div className = "container-fluid">
                
                <Row>
                    <Col lg={12}>
                        <Card className="mx-n4 mt-n4 bg-info bg-soft">
                            <CardBody className="border-bottom py-2">
                                <div className="text-center mb-4">
                                    <img src={image} alt="" className="avatar-md rounded-circle mx-auto d-block" />
                                    <h5 className="mt-3 mb-1">Kajal Sekhri</h5>
                                    <p className="text-muted mb-3">Node Js Developer</p>
                                    <div className="mx-auto">
                                        <span className="badge me-1 text-bg-info">MongoDb</span>
                                        <span className="badge me-1 text-bg-success">Express</span>
                                        <span className="badge me-1 text-bg-warning">Typescript</span>
                                        <span className="badge me-1 text-bg-warning">Swagger</span>
                                        <span className="badge text-bg-warning">Socket.io</span>
                                        <span className="badge text-bg-warning">AWS S3</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <ul className="list-unstyled hstack gap-3 mb-0 flex-grow-1">
                                        <li>
                                            <i className="bx bx-map align-middle"></i> Amritsar, India
                                        </li>
                                        <li>
                                            <i className="bx bx-briefcase-alt-2 align-middle"></i> Full Time
                                        </li>
                                        <li>
                                            <i className="bx bx-time align-middle"></i> 5 days working
                                        </li>
                                    </ul>
                                    <div className="hstack gap-2">
                                        <button type="button" className="btn btn-primary" onClick={handleClick}>Download CV <i className='bx bx-download align-baseline ms-1'></i></button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Sidebar />
                    <Detail />
                </Row>
                </div>
            </div>

        </React.Fragment>
    );
}

Aboutme.propTypes = {
    t:PropTypes.any,
    chartsData : PropTypes.any,
    onGetChartsData : PropTypes.func,
}

export default withTranslation()(Aboutme);