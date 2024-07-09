const alphatub_data = {
  name: "ALPHATUB",
  detail: "AlphaTUB allows parents and teachers to collaborate in creating and sharing content that reflects local culture and interests. This helps foster a deeper connection between home and school, making learning more meaningful and enjoyable.   With the alphaTUB Mobile app, parents and teachers can capture images from a child’s surroundings and transform them into engaging learning materials. This approach ensures that content is relevant, relatable, and fun for each child.  Our TUB Analytics tool provides valuable insights into each child’s learning progress, helping parents and teachers identify areas for improvement and tailor their approach to meet individual needs.",
  learning: ["The whole project is AWS based.", "All the images are stored in AWS S3 bucket and uses AWS lambda.", " It consists of tubclass- where teachers from school can assign sheets to be solved to the students and watch their progress, tubdirector- where director, who has control over one or more schools, can watch the progress of the schools and teachers and related students, mobile application- where parents can sign in and students can complete the assignment given by their teachers or by their own parents and super admin- which has control over everything- directors, teachers, parents and students.", " It uses mongodb as the database."],
  livelink: ["https://alphatub.com", "https://www.tubdirector.alphatub.com/", "https://www.tubclass.alphatub.com/"]
}

const uvault_data = {
  name: "U-VAULT",
  detail: "U-Vault allows users to store their digital certificates with us, which avoids the hustle of managing hard copy of the documents. The platform provides security to these documents. The users can share these whenever they need, within no time. It eliminates the risk of damage or loss to vital records. U-Vault applies Bank grade encryption ensuring the credentials are safeguarded, giving users the confidence as they build and maintain their personal brand. Companies can also signup, which allows them to have rights to keep a check on all the documents shared by their employees to the u-vault users.",
  learning: ["Project involves usage of aws s3 bucket for storing all the documents thereby ensuring their security.", "Besides storing these, proper heirarchy had to be maintained , as the project involves creation of files within folders.", "There is also functionality of renaming, deleting, creating and viewing files and folders from the bucket.", " Also, to maintain proper sync, data was stored efficiently in mongodb as well.", "It involved usage of AWS Lambda.", "In the project, when the user signs up, he is provided with a vault e-mail address, which is used by him to receive his important documents, which then will be directly stored in his u-vault folder."],
  livelink: ["https://u-vault.io/"]
}

const bharatbit_data = {
  name: "BHARATBIT",
  detail: "BharatBit is a P2P platform, allowing users to place an order for selling of cryptocurrency. It deals with Bitcoin, Ethereum and USDT only. BharatBit is a user-centric platform designed to facilitate direct transactions between cryptocurrency enthusiasts. The mission is to provide a secure, transparent, and efficient environment for users to buy and sell digital assets seamlessly.On this platform, the user deposits assets into his BharatBit account. In case of disagreement between buyer and seller, a dispute can be raised by one of them, to be solved by the admin. Hence, the platform is secure and legitimate. ",
  learning: ["The project uses MongoDb as the database at the backend.", "It has both the mobile application and the website.", "The offers by users are created and admin's share is maintained from the admin panel by the admin.", "It involves live chating, which uses socket.io at the backend.", "Proper chat history is maintained related to every offer.", "Notifications are sent through firebase and 2-factor-authenication is maintained during signup , by ensuring correct email address as well as phone number.", "It uses mailgun and twilio for sending email and sms respectively.", "The use can also transfer the assets directly to some other user and can also withdraw assets to his crypto wallet from the platform."],
  livelink: ["https://bharatbit.com/"]
}

const artgallery_data = {
  name: "BHARATBIT",
  detail: "Art Gallery is a Metaverse project which consists of a virtual museum tour. It is a virtual gallery which consists of various paintings of the admin and the user can take a walk and have a look at them. Each painting, when viewed carefully, shows details about it, for example, the date of creation of the painting, it's name, the name of the artist, the description of the art, etc. The museum has two floors- ground and first floor. Each floor has three walls- with specified number of paintings on them.",
  learning: ["The project is a virtual museum of paintings made by the admin.", " The art and the details are stored in mongoDb. Nodejs APIs are used by the metaverse developers to fetch the information from the user side.", "The project also consists of an amin panel, where the usage of backend is maximum.", "The admin can view the paintings he is going to display on each floor and on each wall.", "He can view and update the basic details of the art from the panel.", "Also, he can replace the art on any wall from time to time.", "The changed art will then be displayed in the metaverse museum, fetched by the APIs specified for the same."],
  livelink: ["https://hypsoverse.com/"]
}

const expressminds_data = {
  name: "EXPRESS MINDS",
  detail: "Art Gallery is a Metaverse project which consists of a virtual museum tour. It is a virtual gallery which consists of various paintings of the admin and the user can take a walk and have a look at them. Each painting, when viewed carefully, shows details about it, for example, the date of creation of the painting, it's name, the name of the artist, the description of the art, etc. The museum has two floors- ground and first floor. Each floor has three walls- with specified number of paintings on them.",
  learning: "The project is a virtual museum of paintings made by the admin. The art and the details are stored in mongoDb. Nodejs APIs are used by the metaverse developers to fetch the information from the user side. The project also consists of an amin panel, where the usage of backend is maximum. The admin can view the paintings he is going to display on each floor and on each wall. He can view and update the basic details of the art from the panel. Also, he can replace the art on any wall from time to time. The changed art will then be displayed in the metaverse museum, fetched by the APIs specified for the same. ",
  livelink: "https://hypsoverse.com/"
}

import React from "react"
import { Link } from "react-router-dom"
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"
import Modal from 'react-bootstrap/Modal';
import alphatub from '../../../assets/images/alphatub.jpg'
import uvault from '../../../assets/images/u-vault.jpg'
import bharatbit from '../../../assets/images/bharatbit.jpg'
import mahabharat from '../../../assets/images/mahabharat.jpg'
import artgallery from '../../../assets/images/artgallery.jpg'
import expressminds from '../../../assets/images/expressminds.jpg'
import bitcoinify from '../../../assets/images/bitcoinify.jpg'


//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

// import images
// import img1 from "../../assets/images/small/img-2.jpg"
// import avtar1 from "../../assets/images/users/avatar-2.jpg"

const Projectinfo = ({ logo, userInfo, onHide, show }) => {
  //meta title
  console.log(userInfo, "INFO<<<<")
  document.title = "Blog Details | Skote - React Admin & Dashboard Template";
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ height: "100%" }}
        className='img-view-modal'
      >
        <Modal.Header closeButton className=''>
          <h5>Project Details</h5>
        </Modal.Header>

        <Modal.Body >
          {/* <div className="page-content"> */}
          <Container fluid >
            {/* <Breadcrumbs title="Blog" breadcrumbItem="Blog Details" /> */}
            <Row>
              <Col lg={12}>
                <Card className="mb-1" style={{backgroundImage:`url(https://images.rawpixel.com/image_700/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LWJnLW4tMDA4LWQuanBn.jpg)`, backgroundSize:'cover'}}>
                  <CardBody>
                    <div className="pt-3">
                      <div className="row justify-content-center">
                        <div className="col-xl-8">
                          <div>
                            <div className="text-center">
                              {/* <div className="mb-4">
                              <Link
                                to="#"
                                className="badge bg-light font-size-12"
                              >
                                <i className="bx bx-purchase-tag-alt align-middle text-muted me-1"></i>{" "}
                                Project
                              </Link>
                            </div> */}
                              <h4>{userInfo.name}</h4>
                              {/* <p className="text-muted mb-4">
                              <i className="mdi mdi-calendar me-1"></i> 10 Apr, 2020
                            </p> */}
                            </div>

                            {/* <hr /> */}
                            {/* <div className="text-center"> */}
                            {/* <Row>
                              <Col sm={4}>
                                <div>
                                  <p className="text-muted mb-2">Categories</p>
                                  <h5 className="font-size-15">Project</h5>
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                  <p className="text-muted mb-2">Date</p>
                                  <h5 className="font-size-15">10 Apr, 2020</h5>
                                </div>
                              </Col>
                              <Col sm={4}>
                                <div className="mt-4 mt-sm-0">
                                  <p className="text-muted mb-2">Post by</p>
                                  <h5 className="font-size-15">Gilbert Smith</h5>
                                </div>
                              </Col>
                            </Row> */}
                            {/* </div> */}
                            {/* <hr /> */}

                            <div className=" rounded-circle mx-auto border border-4 border-dark mt-4" style={{height:'20vh',width: '30vh', backgroundImage:`url(${logo})`, backgroundSize: 'cover',position:'relative', backgroundPosition: 'center',}}>
                              {/* <img
                                src={logo} 
                                alt=""
                                className="img-circle mx-auto d-block"
                                
                              /> */}
                            </div>

                            <hr />

                            <div className="mt-4">
                              <div className="text-muted font-size-14">
                                <blockquote className="p-4 border-light border rounded mb-4">
                                  <div className="d-flex">
                                    <div className="me-3">
                                      <i className="bx bxs-quote-alt-left text-dark font-size-24"></i>
                                    </div>
                                    <div>
                                      <p className="mb-0">
                                        {" "}
                                        <h6>{userInfo?.detail1}</h6>
                                      </p>
                                    </div>
                                  </div>
                                </blockquote>

                                <p className="mb-4">
                                  <h6>{userInfo?.detail2}</h6>
                                </p>
                                <hr/>

                                <div className="mt-4">
                                  <h5 className="mb-3">ABOUT THE BACKEND : </h5>

                                  <div>
                                    <div className="row">
                                      <div className="col-lg-12 col-sm-6">
                                        <div>
                                          <ul className="ps-4">
                                            <h6>
                                            {userInfo?.learning?.map((info, key) => (
                                              <li className="py-1" key= {key}>
                                                {info}
                                              </li>
                                            ))}
                                            </h6>

                                          </ul>
                                        </div>
                                      </div>
                                      {/* <div className="col-lg-4 col-sm-6">
                                      <div>
                                        <ul className="ps-4">
                                          <li className="py-1">
                                            Aenean ligula eget
                                          </li>
                                          <li className="py-1">
                                            Cum sociis natoque
                                          </li>
                                        </ul>
                                      </div>
                                    </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* <hr /> */}

                              <div className="mt-5">
                                <h5 className="font-size-15">
                                  <i className="bx bx-link-alt text-muted align-middle me-1"></i>{" "}
                                  LIVE LINKS :
                                </h5>
                                <div>
                                    <div className="row">
                                      <div className="col-lg-12 col-sm-6">
                                        <div>
                                          <ul className="ps-4">
                                            {userInfo?.livelink?.map((info, key) => (
                                              <li className="py-1" key= {key}>
                                                 <a href={info} target="_blank" rel="noopener noreferrer">
                                                  {info}
                                                  </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                      </div>
                                      </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* </div> */}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Projectinfo
