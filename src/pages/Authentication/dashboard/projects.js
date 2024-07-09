const alphatub_data={
    name:"ALPHATUB",
    detail1:"AlphaTUB allows parents and teachers to collaborate in creating and sharing content that reflects local culture and interests. This helps foster a deeper connection between home and school, making learning more meaningful and enjoyable. With the alphaTUB Mobile app, parents and teachers can capture images from a child’s surroundings and transform them into engaging learning materials. ",
    detail2:"This approach ensures that content is relevant, relatable, and fun for each child.  The TUB Analytics tool provides valuable insights into each child’s learning progress, helping parents and teachers identify areas for improvement and tailor their approach to meet individual needs.",
    learning: ["The whole project is AWS based.","All the images are stored in AWS S3 bucket and uses AWS lambda."," It consists of tubclass- where teachers from school can assign sheets to be solved to the students and watch their progress, tubdirector- where director, who has control over one or more schools, can watch the progress of the schools and teachers and related students, mobile application- where parents can sign in and students can complete the assignment given by their teachers or by their own parents and super admin- which has control over everything- directors, teachers, parents and students."," It uses mongodb as the database."],
    livelink: ["https://alphatub.com", "https://www.tubdirector.alphatub.com/" , "https://www.tubclass.alphatub.com/"]
}

const uvault_data={
    name:"U-VAULT",
    detail1:"U-Vault allows users to store their digital certificates with us, which avoids the hustle of managing hard copy of the documents. The platform provides security to these documents. The users can share these whenever they need, within no time. It eliminates the risk of damage or loss to vital records.",
    detail2:" U-Vault applies Bank grade encryption ensuring the credentials are safeguarded, giving users the confidence as they build and maintain their personal brand. Companies can also signup, which allows them to have rights to keep a check on all the documents shared by their employees to the u-vault users.",
    learning: ["Project involves usage of aws s3 bucket for storing all the documents thereby ensuring their security.","Besides storing these, proper heirarchy had to be maintained , as the project involves creation of files within folders.","There is also functionality of renaming, deleting, creating and viewing files and folders from the bucket."," Also, to maintain proper sync, data was stored efficiently in mongodb as well.","It involved usage of AWS Lambda.","In the project, when the user signs up, he is provided with a vault e-mail address, which is used by him to receive his important documents, which then will be directly stored in his u-vault folder." ],
    livelink:["https://u-vault.io/"]
}

const bharatbit_data ={
    name:"BHARATBIT",
    detail1:"BharatBit is a P2P platform, allowing users to place an order for selling of cryptocurrency. It deals with Bitcoin, Ethereum and USDT only. BharatBit is a user-centric platform designed to facilitate direct transactions between cryptocurrency enthusiasts. The mission is to provide a secure, transparent, and efficient environment for users to buy and sell digital assets seamlessly.",
    detail2:"On this platform, the user deposits assets into his BharatBit account. In case of disagreement between buyer and seller, a dispute can be raised by one of them, to be solved by the admin. Hence, the platform is secure and legitimate. ",
    learning : ["The project uses MongoDb as the database at the backend.","It has both the mobile application and the website.","The offers by users are created and admin's share is maintained from the admin panel by the admin.","It involves live chating, which uses socket.io at the backend.","Proper chat history is maintained related to every offer.","Notifications are sent through firebase and 2-factor-authenication is maintained during signup , by ensuring correct email address as well as phone number.","It uses mailgun and twilio for sending email and sms respectively.","The use can also transfer the assets directly to some other user and can also withdraw assets to his crypto wallet from the platform."],
    livelink:["https://bharatbit.com/"]
}

const artgallery_data = {
    name:"ART GALLERY",
    detail1:"Art Gallery is a Metaverse project which consists of a virtual museum tour. It is a virtual gallery which consists of various paintings of the admin and the user can take a walk and have a look at them. Each painting, when viewed carefully, shows details about it, for example, the date of creation of the painting, it's name, the name of the artist, the description of the art, etc.",
    detail2:" The museum has two floors- ground and first floor. Each floor has three walls- with specified number of paintings on them.",
    learning : ["The project is a virtual museum of paintings made by the admin."," The art and the details are stored in mongoDb. Nodejs APIs are used by the metaverse developers to fetch the information from the user side.","The project also consists of an amin panel, where the usage of backend is maximum.","The admin can view the paintings he is going to display on each floor and on each wall.","He can view and update the basic details of the art from the panel.","Also, he can replace the art on any wall from time to time.","The changed art will then be displayed in the metaverse museum, fetched by the APIs specified for the same."],
    livelink:["https://hypsoverse.com/"]
}

const expressminds_data = {
    name:"EXPRESS MINDS",
    detail1:"Express minds is a platform which supports crypto exchange between users .It is a Botswana company,which adheres to the highest standards in data protection. It gives the best exchange rates with the lowest fees. Requests are fully encrypted, which offers greater privacy .",
    detail2:"The mobile application is still to go live. The platform ensures quick deposit of crypto and fiat ,within our wallets. Also, they are constantly adding new payment methods.",
    learning :["The project involves the usage of Web3 from the backend.","The project deals with five types of assets- Polygon matic, Ethereum, Binance coin, Solana and Tron","During the signup of the user, his wallets get created from the backend and transfer of the assets within the application also takes help of backend.","It makes use of AMLBot for KYC verification which authenticates the identity of the user.","Mercuryo is used to buy funds into the application from fiat money.", "Firebase is used for push notifications and in-app notifications."],
    livelink:["https://expressminds.com/"]
}

const mahabharat_data = {
    name:"TARALITY SPACE",
    detail1:"Tarality Space is a metaverse project, made with unity. It allows users to play game- one of them being Mahabharat. The game's immersive environment is designed to give players a realistic experience of the war-like setting that took place between the Kauravas and Pandavas in 3000 BC.",
    detail2:"It is a fantastic game that user can download for free on Android, iOS, and desktop platforms. Here, the user plays and earns the TARAL coin, which later can be withdraw to their wallets. ",
    learning :["Nodejs and Mongodb's collaboration with the metaverse.", "The database from the backend was used to store the users on the platform.", "The calculations of tokens and the coins was maintained at the backend.", "The metaverse then uses the APIs to fetch the total coins and tokens of the user."],
    livelink:["https://taralityspace.com/"]
}

const bitcoinify_data = {
    name:"BITCOINIFY",
    detail1:"Bitcoinify is a platform that allows on-ramping of cryptocurrency. It ensures authentication of the user by KYC verification. The user, can also check the history of the transactions made by him on the platform.",
    detail2:"It makes use of blockchain and web3, enabling smooth transfer of cryptocurrency into the wallets of the users.",
    learning :["The project uses on-ramper integration for purchase of assets by the user.", "MongoDb is used at the backend as the database.","The KYC veriication request is sent to the admin at the admin panel, and he manually approves them, if valid."],
    livelink:["https://bitcoinify.global/"]
}

import React, { useState } from "react"
import {
    Card,
    Col,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
    Container,
} from "reactstrap"

import classnames from "classnames"
// import img1 from "../../../assets/images/small/img-2.jpg"
// import img2 from "../../../assets/images/small/img-6.jpg"
// import img3 from "../../../assets/images/small/img-1.jpg"
import { Link } from "react-router-dom"
import Projectinfo from "./projectinfo"

import alphatub from '../../../assets/images/alphatub.jpg'
import uvault from '../../../assets/images/u-vault.jpg'
import bharatbit from '../../../assets/images/bharatbit.jpg'
import mahabharat from '../../../assets/images/mahabharat.jpg'
import artgallery from '../../../assets/images/artgallery.jpg'
import expressminds from '../../../assets/images/expressminds.jpg'
import bitcoinify from '../../../assets/images/bitcoinify.jpg'
import projectbg from '../../../assets/images/project-bg.jpeg'

const Projects = () => {
    const [activeTab, toggleTab] = useState("1")
    const [modalShow, setModalShow] = React.useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [logo, setLogo] = useState(null);

    const toggle = tab => {
        if (activeTab !== tab) toggleTab(tab)
    }
    return (
        <React.Fragment>
            {modalShow && (
                <Projectinfo logo = {logo} userInfo={userInfo} show={modalShow} onHide={() => setModalShow(false)} />
            )}
            <div style={{marginTop:'5%'}}>
            <div className = "container-fluid">
                {/* <Container fluid > */}

                    <Row>
                        <Col xl={12} lg={8}>
                            <Card style={{backgroundImage:`url(${projectbg})`, backgroundSize:'cover'}}>
                                <div className="nav nav-tabs nav-tabs-custom justify-content-center pt-2 text-dark">
                                <h4 className="text-white">ALL PROJECTS</h4>
                                </div>
                                {/* <ul
                                    className="nav nav-tabs nav-tabs-custom justify-content-center pt-2 text-dark"
                                    role="tablist"
                                > */}
                                    
                                    {/* <NavItem>
                                        <NavLink
                                            to="#"
                                            className={classnames({
                                                active: activeTab === "1",
                                            })}
                                            onClick={() => {
                                                toggleTab("1")
                                            }}
                                        >
                                            All Post
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            to="#"
                                            className={classnames({
                                                active: activeTab === "2",
                                            })}
                                            onClick={() => {
                                                toggleTab("2")
                                            }}
                                        >
                                            Archive
                                        </NavLink>
                                    </NavItem> */}
                                {/* </ul> */}
                                <TabContent className="p-4" activeTab={activeTab}>
                                    <TabPane tabId="1">
                                        <div>
                                            <Row className="justify-content-center">
                                                <Col xl={12}>
                                                    <div>
                                                        <div className="row align-items-center">
                                                            {/* <div className="col-4">
                                                                <div>
                                                                    <h5 className="mb-0 mt-4"></h5>
                                                                </div>
                                                            </div> */}

                                                            {/* <Col xs={8}>
                                                                <div className="float-end">
                                                                    <ul className="nav nav-pills">
                                                                        <NavItem>
                                                                            <NavLink
                                                                                className="disabled"
                                                                                to="#"
                                                                                tabIndex="-1"
                                                                            >
                                                                                {/* View : */}
                                                                            {/* </NavLink>
                                                                        </NavItem>
                                                                        <NavItem> 
                                                                            <Link className="nav-link" to="blog-list"> */}
                                                                                {/* <i className="mdi mdi-format-list-bulleted"></i> */}
                                                                            {/* </Link>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <Link
                                                                                to="blog-grid " */}
                                                                            {/* //   className="nav-link active"
                                                                            > */}
                                                                                {/* <i className="mdi mdi-view-grid-outline"></i> */}
                                                                            {/* </Link>
                                                                        </NavItem>
                                                                    </ul>
                                                                </div>
                                                            </Col> */}
                                                        </div>

                                                        {/* <hr className="mb-4" /> */}

                                                        <Row>
                                                            <Col sm={4}>
                                                                <Card className="p-1 border shadow-none">
                                                                    <div className="p-3">
                                                                        <h5>
                                                                            <Link to="blog-details" className="text-dark">
                                                                                ALPHATUB
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-muted mb-0">( Live Project )</p>
                                                                    </div>

                                                                    <div className="position-relative">
                                                                        <img
                                                                            src={alphatub}
                                                                            alt=""
                                                                            className="img-thumbnail"
                                                                        />
                                                                    </div>

                                                                    <div className="p-3">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Education
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Personalized Content
                                                                                </Link>
                                                                            </li>

                                                                        </ul>
                                                                        <p>
                                                                            A platform where children can play and learn with dynamic, personalized content, while parents and teachers monitor their progress.
                                                                        </p>

                                                                        <div>
                                                                            <Link to="#" className="text-primary" onClick={() => { setModalShow(true); setUserInfo(alphatub_data); setLogo(alphatub) }}>
                                                                                Read more{" "}
                                                                                <i className="mdi mdi-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>

                                                            <Col sm={4}>
                                                                <Card className="p-1 border shadow-none">
                                                                    <div className="p-3">
                                                                        <h5>
                                                                            <Link to="blog-details" className="text-dark">
                                                                                U-VAULT
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-muted mb-0">( Live Project )</p>
                                                                    </div>

                                                                    <div className="position-relative">
                                                                        <img
                                                                            src={uvault}
                                                                            alt=""
                                                                            className="img-thumbnail"
                                                                        />

                                                                        {/* <div className="blog-play-icon">
                                                                            <Link
                                                                                to="#"
                                                                                className="avatar-sm d-block mx-auto"
                                                                            >
                                                                                <span className="avatar-title rounded-circle font-size-18">
                                                                                    <i className="mdi mdi-play"></i>
                                                                                </span>
                                                                            </Link>
                                                                        </div> */}
                                                                    </div>
                                                                    <div className="p-3">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Store certificates
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Security
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Share Data
                                                                                </Link>
                                                                            </li>
                                                                        </ul>

                                                                        <p>
                                                                            A platform which enable users to store their crucial records, ensuring they're readily available at pivotal moments.
                                                                        </p>

                                                                        <div>
                                                                            <Link to="#" className="text-primary" onClick={() => { setModalShow(true); setUserInfo(uvault_data); ; setLogo(uvault)}}>
                                                                                Read more{" "}
                                                                                <i className="mdi mdi-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>

                                                            <Col sm={4}>
                                                                <Card className="p-1 border shadow-none">
                                                                    <div className="p-3">
                                                                        <h5>
                                                                            <Link to="blog-details" className="text-dark">
                                                                                BHARATBIT
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-muted mb-0">( Live Project )</p>
                                                                    </div>

                                                                    <div className="position-relative">
                                                                        <img
                                                                            src={bharatbit}
                                                                            alt=""
                                                                            className="img-thumbnail"
                                                                        />
                                                                    </div>

                                                                    <div className="p-3">
                                                                        <ul className="list-inline">
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Blockchain
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Live Chat
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    P2P
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                        <p>
                                                                            A P2P platform , which enables buying and selling of cryptocurrency, along with live chat between the users.
                                                                        </p>

                                                                        <div>
                                                                            <Link to="#" className="text-primary" onClick={() => { setModalShow(true); setUserInfo(bharatbit_data); ; setLogo(bharatbit)}}>
                                                                                Read more{" "}
                                                                                <i className="mdi mdi-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                        </Row>

                                                        <Row>

                                                            <Col sm={4}>
                                                                <Card className="p-1 border shadow-none">
                                                                    <div className="p-3">
                                                                        <h5>
                                                                            <Link to="blog-details" className="text-dark">
                                                                                ART GALLERY
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-muted mb-0">( Live Project )</p>
                                                                    </div>

                                                                    <div className="position-relative">
                                                                        <img
                                                                            src={artgallery}
                                                                            alt=""
                                                                            className="img-thumbnail"
                                                                        />
                                                                    </div>

                                                                    <div className="p-3">
                                                                        <ul className="list-inline">
                                                            
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Metaverse
                                                                                </Link>
                                                                            </li>
                                                                            
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Art 
                                                                                </Link>
                                                                            </li>

                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    MongoDb
                                                                                </Link>
                                                                            </li>
                                                                        </ul>

                                                                        <p>
                                                                            A metaverse environment which presents a virtual museum, and stores the data using non-relational database.
                                                                        </p>

                                                                        <div>
                                                                            <Link to="#" className="text-primary" onClick={() => { setModalShow(true); setUserInfo(artgallery_data); ; setLogo(artgallery)}}>
                                                                                Read more{" "}
                                                                                <i className="mdi mdi-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <Card className="p-1 border shadow-none">
                                                                    <div className="p-3">
                                                                        <h5>
                                                                            <Link to="blog-details" className="text-dark">
                                                                                EXPRESS MINDS
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-muted mb-0">( Live Project )</p>
                                                                    </div>

                                                                    <div className="position-relative">
                                                                        <img
                                                                            src={expressminds}
                                                                            alt=""
                                                                            className="img-thumbnail"
                                                                        />
                                                                    </div>

                                                                    <div className="p-3">
                                                                        <ul className="list-inline">
                                                                        <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Blockchain
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Mobile Application
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Web3
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                        <p>
                                                                            It is a mobile application, which is used for crytocurrency exchange and involves usage of web3 at the backend.
                                                                        </p>

                                                                        <div>
                                                                            <Link to="#" className="text-primary" onClick={() => { setModalShow(true); setUserInfo(expressminds_data); ; setLogo(expressminds)}}>
                                                                                Read more{" "}
                                                                                <i className="mdi mdi-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <Card className="p-1 border shadow-none">
                                                                    <div className="p-3">
                                                                        <h5>
                                                                            <Link to="blog-details" className="text-dark">
                                                                                TARALITY SPACE
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-muted mb-0">( Live Project )</p>
                                                                    </div>

                                                                    <div className="position-relative">
                                                                        <img
                                                                            src={mahabharat}
                                                                            alt=""
                                                                            className="img-thumbnail"
                                                                        />
                                                                    </div>

                                                                    <div className="p-3">
                                                                        <ul className="list-inline">
                                                                        <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Metaverse
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    MongoDb
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Blockchain
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                        <p>
                                                                            Metaverse porject which uses blockchain, as well as nodejs as backend for storing and fetching information.
                                                                        </p>

                                                                        <div>
                                                                            <Link to="#" className="text-primary" onClick={() => { setModalShow(true); setUserInfo(mahabharat_data); ; setLogo(mahabharat)}}>
                                                                                Read more{" "}
                                                                                <i className="mdi mdi-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col sm={4}>
                                                                <Card className="p-1 border shadow-none">
                                                                    <div className="p-3">
                                                                        <h5>
                                                                            <Link to="blog-details" className="text-dark">
                                                                                BITCOINIFY
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-muted mb-0">( Live Project )</p>
                                                                    </div>

                                                                    <div className="position-relative">
                                                                        <img
                                                                            src={bitcoinify}
                                                                            alt=""
                                                                            className="img-thumbnail"
                                                                        />
                                                                    </div>

                                                                    <div className="p-3">
                                                                        <ul className="list-inline">
                                                                        <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    Blockchain
                                                                                </Link>
                                                                            </li>
                                                                            <li className="list-inline-item me-3">
                                                                                <Link to="#" className="text-muted">
                                                                                    <i className="bx bxs-circle align-middle text-muted me-1"></i>{" "}
                                                                                    On-ramping
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                        <p>
                                                                            A blockchain related project which allows on-ramping of assets into the user's wallet.
                                                                        </p>

                                                                        <div>
                                                                            <Link to="#" className="text-primary" onClick={() => { setModalShow(true); setUserInfo(bitcoinify_data); ; setLogo(bitcoinify)}}>
                                                                                Read more{" "}
                                                                                <i className="mdi mdi-arrow-right"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </Col>
                                                            </Row>

                                                        <hr className="my-4" />

                                                        <div className="text-center">
                                                            <ul className="pagination justify-content-center pagination-rounded">
                                                                <li className="page-item disabled">
                                                                    <Link to="#" className="page-link">
                                                                        <i className="mdi mdi-chevron-left"></i>
                                                                    </Link>
                                                                </li>
                                                                <li className="page-item">
                                                                    <Link to="#" className="page-link">
                                                                        1
                                                                    </Link>
                                                                </li>
                                                                <li className="page-item disabled">
                                                                    <Link to="#" className="page-link">
                                                                        <i className="mdi mdi-chevron-right"></i>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <hr/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPane>

                                    <TabPane tabId="2">
                                        <div>
                                            <Row className="justify-content-center">
                                                <Col xl={8}>
                                                    <h5>Archive</h5>

                                                    <div className="mt-5">
                                                        <div className="d-flex flex-wrap">
                                                            <div className="ms-2">
                                                                <h4>2020</h4>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <span className="badge badge-soft-success badge-pill float-right ms-1 font-size-12">
                                                                    03
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-2" />

                                                        <div className="list-group list-group-flush">
                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i>{" "}
                                                                Beautiful Day with Friends
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Drawing
                                                                a sketch
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Project
                                                                discussion with team
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="d-flex flex-wrap">
                                                            <div className="ms-2">
                                                                <h4>2019</h4>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <span className="badge badge-soft-success badge-pill float-right ms-1 font-size-12">
                                                                    06
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-2" />

                                                        <div className="list-group list-group-flush">
                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Coffee
                                                                with Friends
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Neque
                                                                porro quisquam est
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Quis
                                                                autem vel eum iure
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Cras mi
                                                                eu turpis
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Drawing
                                                                a sketch
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Project
                                                                discussion with team
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="d-flex flex-wrap">
                                                            <div className="ms-2">
                                                                <h4>2018</h4>
                                                            </div>
                                                            <div className="ms-auto">
                                                                <span className="badge badge-soft-success badge-pill float-right ms-1 font-size-12">
                                                                    03
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-2" />

                                                        <div className="list-group list-group-flush">
                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i>{" "}
                                                                Beautiful Day with Friends
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Drawing
                                                                a sketch
                                                            </Link>

                                                            <Link
                                                                to="blog-details"
                                                                className="list-group-item text-muted"
                                                            >
                                                                <i className="mdi mdi-circle-medium ms-1"></i> Project
                                                                discussion with team
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </TabPane>
                                </TabContent>
                            </Card>
                        </Col>
                    </Row>

                {/* </Container> */}
                </div>
            </div>



        </React.Fragment >
    )
}
export default Projects
