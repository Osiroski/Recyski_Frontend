
import { Image } from "react-bootstrap";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import looks from '../../../assets/looks.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendar, faMoneyCheckAlt, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import Seccards from "../Section/Seccards";
import './account.css';

const Profile = () => {
    return (
        <div className="container-fluid">
            <Header title="Profile" />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light2">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded-3 col-12">
                            <h1 className="h2">Profile</h1>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <Image src={looks} roundedCircle={true} width="140" height="140" />
                                    <h4 id='username'>Username</h4>
                                    <button type="button" className="btn btn-sm btn-primary" data-bs-toggle="modal"
                                        data-bs-target="#exampleModalCenteredScrollable" >
                                        <FontAwesomeIcon icon={faPenNib} className="mr-2" />
                                        Edit Profile
                                    </button>
                                    <form>
                                        <div className="input-group  mb-3 mt-3">
                                            <span className="input-group-text" >@</span>
                                            <input type="text" id="basic-addon1" className="form-control form-control-lg" aria-label="Username" placeholder="Username" aria-describedby="basic-addon1" />

                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="emailId" placeholder="name@example.com" />
                                            <label htmlFor="emailid">Email address</label>
                                        </div>
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                        <div className="input-group mb-3 mt-3">
                                            <span className="input-group-text">+254</span>
                                            <input  id="phone" type="phone" className="form-control form-control-lg" placeholder="Phone No." aria-label="phone" aria-describedby="pahone" />
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="address" className="form-control" id="floatingAddress" placeholder="Address" />
                                            <label htmlFor="floatingAddress">Address</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingLocation" placeholder="location" />
                                            <label htmlFor="floatingAddress">Location</label>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <Seccards title={"Earnings (monthly)"} digit={"$40,000"} icon={faCalendar} borderColor={"primary"} progressBar={false} />
                                    <div className="mb-4">
                                        <div className="card shadow mb-4">
                                            <div className="card-header py-3">
                                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                                            </div>
                                            <div className="card-body">
                                                <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
                                                <div className="progress mb-4">
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                                <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
                                                <div className="progress">
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-success">
                                                 <FontAwesomeIcon icon={faMoneyCheckAlt} size="lg" className="mr-2"/>
                                                 Payments
                                            </h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" width="25rem" src="assets/Recycling.gif" alt="" />
                                            </div>
                                            <p>Add some quality, svg illustrations to your project courtesy of, a
                                                constantly updated collection of beautiful svg images that you can use
                                                completely free and without attribution!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                        </div>
                                        <div className="card-body">
                                            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                                CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                                custom components and custom utility classNamees.</p>
                                            <p className="mb-0">Before working with this theme, you should become familiar with the
                                                Bootstrap framework, especially the utility classNamees.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Profile
