import looks from '../../../assets/looks.jpg'
import { Card, Image, Row } from "react-bootstrap";
import { faCalendar, faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BasicForm, Inputs } from "../../Forms";
import Seccards from "../Section/Seccards";
import Modal from "./Modal";

const ProfileInfo = () => {
    const handleSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <Row>
            <div className="col-xl-4 col-lg-5">
                <div className='text-center'>
                    <Image src={looks} roundedCircle={true} width="140" height="140" />
                    <h4 id='username'>Username</h4>
                    <button type="button" className="btn btn-sm btn-primary rounded-5" data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenteredScrollable" >
                        <FontAwesomeIcon icon={faPenNib} className="mr-2" />
                        Edit Profile
                    </button>
                </div>
                <BasicForm onSubmit={handleSubmit} type={'login'} >
                    <div className='mt-3 mb-3' id='emailId'>
                        <Inputs
                            label={'Email'} name={'email'}
                            type={'email'} disabled={true}
                            autoplace={{
                                autoComplete: 'email',
                                placeholder: 'Email Address'
                            }} />
                    </div>
                    <div className='mb-3' id='emailId'>
                        <Inputs label={'Username'} name={'username'} type={'text'}
                            autoplace={{
                                autoComplete: 'username',
                                placeholder: 'username'
                            }} />
                    </div>
                    <div className='mt-4 mb-3' id='phone'>
                        <Inputs label={'Phone'} name={'phone'} type={'phone'}
                            autoplace={{
                                autoComplete: 'phone',
                                placeholder: 'Phone'
                            }} />
                    </div>
                    <div className='mb-3' id='floatingAddress'>
                        <Inputs label={'Location'} name={'location'} type={'text'}
                            autoplace={{
                                autoComplete: 'location',
                                placeholder: 'Location'
                            }} />
                    </div>
                </BasicForm>
            </div>
            <div className="col-xl-8 col-lg-7 mt-2">
                <Seccards title={"Earnings (monthly)"} digit={"$40,000"} icon={faCalendar} borderColor={"primary"} progressBar={false} />
                <div className="mb-4">
                    <Card className="shadow mb-4">
                        <Card.Header className=" py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                        </Card.Header>
                        <Card.Body className="card-body">
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
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Modal />
        </Row>

    )
}

export default ProfileInfo
