import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Card, CardBody, Col, Row, Container } from 'reactstrap';  
import "../../assets/css/style.css";
import image from "../../assets/images/unnamed.jpg"

//import common data
// import { jobListCandidate } from "../../../common/data/job";
const jobListCandidate = []

const List = () => { 
    console.log("heyyyyyyyy",jobListCandidate)
    const activeBtn = (ele) => {
        if(ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    }
    return (
        <React.Fragment>
            <div className='account-pages pt-sm-5 login-box-center'>
             <Container fluid className="align-items-center justify-content-center my-5" >
            <Row className="justify-content-center">
                <Col md={8} lg={6} xl={5}>
                    <Card className="overflow-hidden" style={{height: '60vh'}}>
                        <CardBody className="justify-content-center">
                            <div className="d-flex align-start mb-4 mt-2">
                                <div className="flex-grow-1">
                                    <span className="badge badge-soft-success" >
                                        Full Time
                                    </span>
                                </div>

                            </div>
                            <div className="text-center mb-3 mt-4">
                                <img src={image} alt="" className="avatar-lg rounded-circle" />
                                <h6 className="font-size-15 mt-4 mb-1">Kajal Sekhri</h6>
                                <p className="mb-0 text-muted mt-1">Node Js Developer</p>
                            </div>  
                            <div className="d-flex mb-3 justify-content-center gap-2 text-muted mt-2">
                                <div>
                                    <i className='bx bx-map align-middle text-primary '></i> Amritsar, India
                                </div>
                                <p className="mb-0 text-center"><i className='bx bx-briefcase align-middle text-primary'></i>  1.5 years</p>
                            </div>
                            <div className="hstack gap-2 justify-content-center mt-2">
                                {(["Mongo DB", "Express", "Typescript", "Swagger", "AWS S3", "Socket.io"]).map((subItem , key) => (
                                <span key={key} className="badge badge-soft-secondary">{subItem}</span>
                                ))}
                            </div>

                            <div className="mt-4 pt-1">
                                <Link to="/about-me" className="btn btn-soft-primary d-block mt-4">View Profile</Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
            </div>
        </React.Fragment>
    );
}

export default List;