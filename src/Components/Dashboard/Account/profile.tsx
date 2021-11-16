import { Card, Image, Row, Badge } from "react-bootstrap";
import { faCalendar, faPenNib, faCoins, faPhoneSquare, faLocationArrow, faLevelUpAlt, faBullseye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Seccards from "../Section/Seccards";
import Modal from "./Modal";
import userService from "../../../Services/user.service";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../../../redux/store/store";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { userProfileUpdate } from "../../../redux/actions/actionCreators";

const ProfileInfo = () => {
    const profile = useSelector((state: RootState) => state.profile);
    const state = useSelector((state: RootState) => state.user);
    const formData = {
        bio: profile.bio,
        phoneNumber: profile.phoneNumber,
        location: profile.location,
        birth_date: profile.birth_date,
    }
    
    const dispatch = useDispatch()
    const [selectedFile, setselectedFile] = useState<string | Blob>('')
    const [formdata, setFormdata] = useState(formData)
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const data = { ...formdata, [event.currentTarget.name]: event.currentTarget.value }
        setFormdata(data)
    }
    const profilePicHandler = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0]
            setselectedFile(img);
        }
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const fd = new FormData()
        fd.append('user', String(state.id))
        fd.append('bio', formdata.bio)
        fd.append('phoneNumber', formdata.phoneNumber)
        fd.append('location', formdata.location)
        fd.append('birth_date', formdata.birth_date)
        fd.append('profile_image', selectedFile, 'profile_image.jpg')
        dispatch(userProfileUpdate(fd));
    }
    return (
        <Row>
            <div className="col-xl-4 col-lg-5">
                <div className='text-center'>
                    <Image src={userService.getProfileImage(profile.profile_image)} roundedCircle={true} width="140" height="140" />
                    <h4 id='username'>{state.username}</h4>
                    <button type="button" className="btn btn-sm btn-primary rounded-5" data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenteredScrollable" >
                        <FontAwesomeIcon icon={faPenNib} className="mr-2" />
                        Edit Profile
                    </button>
                </div>
                <div className='my-3 text-center'>
                    <p className="fw-bold"><Badge pill className="bg-warning text-dark">Email</Badge> {state.email}</p>
                </div>
                <div className="p-1">
                    <figure className="p-3 mb-0">
                        <blockquote className="blockquote">
                            <p>{formdata.bio}</p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 text-muted">
                            <cite title="Source Title">{state.username}, Environment Champion</cite>
                        </figcaption>
                    </figure>
                </div>
                <div className='text-center'>
                    <p className="fw-bold"><FontAwesomeIcon icon={faCoins} className="mr-2" />Points {profile.points}</p>
                    <p className="fw-bold">Level <FontAwesomeIcon icon={faLevelUpAlt} className="mr-2" />{profile.level}</p>
                    <p><FontAwesomeIcon icon={faPhoneSquare} className="mr-2" />{profile.phoneNumber}</p>
                    <p><FontAwesomeIcon icon={faLocationArrow} className="mr-2" />{profile.location}</p>
                    <p><FontAwesomeIcon icon={faCalendar} className="mr-2" />Birthdate: {profile.birth_date}</p>
                </div>
            </div>
            <div className="col-xl-8 col-lg-7 mt-2 text-end">
                <div className="mb-4">
                    <Card className="shadow mb-4">
                        <Card.Header className=" py-3">
                            <h6 className="m-0 font-weight-bold text-primary"><FontAwesomeIcon icon={faBullseye} className="mr-2" />Targets</h6>
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
                <div className='text-center'>
                    <Seccards title={"Earnings (monthly)"} digit={"$40,000"} icon={faCalendar} borderColor={"primary"} progressBar={false} />
                </div>
            </div>
            <Modal
                state={state}
                profile={profile}
                formData={formdata}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handlePic={profilePicHandler} />
        </Row>

    )
}

export default ProfileInfo
