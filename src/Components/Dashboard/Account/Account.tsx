
import { Card, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";

import ProfileInfo from "./profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoneyCheckAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './account.css';

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";


const Profile = () => {
    const isLoggedin = useSelector((state: RootState) => state.user.isLoggedin)
    if (isLoggedin===false){
        return (
          <Redirect to='login' />
        )
      }
    
    return (
        <Container fluid className="container-fluid">
            <Header title="Profile" icon={faUserCircle} />
            <Container fluid className="container-fluid">
                <Row>
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light2">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded-3 col-12">
                            <h1 className="h2">Profile</h1>
                        </div>
                        <Container fluid>
                            <ProfileInfo />
                            <Row>
                                <div className="col-lg-6 mb-4">
                                    <Card className=" shadow mb-4">
                                        <Card.Header className=" py-3">
                                            <h6 className="m-0 font-weight-bold text-success">
                                                <FontAwesomeIcon icon={faMoneyCheckAlt} size="lg" className="mr-2" />
                                                Payments
                                            </h6>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="text-center">
                                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" width="25rem" src="assets/Recycling.gif" alt="" />
                                            </div>
                                            <p>Add some quality, svg illustrations to your project courtesy of, a
                                                constantly updated collection of beautiful svg images that you can use
                                                completely free and without attribution!</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <Card className="card shadow mb-4">
                                        <Card.Header className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                        </Card.Header>
                                        <Card.Body className="card-body">
                                            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                                CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                                custom components and custom utility classNamees.</p>
                                            <p className="mb-0">Before working with this theme, you should become familiar with the
                                                Bootstrap framework, especially the utility classNamees.</p>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Row>
                        </Container>
                    </main>
                </Row>
            </Container>
        </Container>
    )
}

export default Profile
