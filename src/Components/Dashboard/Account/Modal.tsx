
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FormEvent} from "react";
import { Image, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { ProfileState, UserState } from "../../../redux/actions/actionsTypes";
import { RootState } from "../../../redux/store/store";
import userService from "../../../Services/user.service";

interface IProps{
    state:UserState,
    profile:ProfileState,
    formData:any
    handleChange:(event:ChangeEvent<HTMLInputElement>)=>void;
    handleSubmit:(event:FormEvent<HTMLFormElement>) =>void;
    handlePic:(event:any)=>void;
}

const Modal = (props:IProps) => {
    const profile =useSelector((state: RootState) => state.profile);
    return (
        <div className="modal fade"
            id="exampleModalCenteredScrollable"
            tabIndex={-1} aria-labelledby="exampleModalCenteredScrollableTitle"
            data-bs-backdrop="static" data-bs-keyboard="false"
            aria-hidden="true" style={{ display: "none" }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenteredScrollableTitle"><FontAwesomeIcon icon={faPenNib} className="mr-2" />Edit Profile</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <Form onSubmit={props.handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <Image 
                                src={userService.getProfileImage(profile.profile_image)} 
                                roundedCircle={true} 
                                width="160" height="160"/>
                            </div>
                            <div className="col-6 mt-3" >
                                <label 
                                id='uploadImage' 
                                className='py-1 fw-bold'>Change Picture</label>
                                <input 
                                type="file" id='uploadImage' 
                                className="form-control form-control-sm" 
                                onChange={props.handlePic} />
                            </div>
                        </div>
                        <div className="row mt-3"> 
                                <Form.Group controlId="formBio">
                                    <Form.Label>Bio</Form.Label>
                                    <Form.Control size='sm' type="text" name="bio" value={props.formData.bio} onChange={props.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control size='sm' type="text" name="phoneNumber" value={props.formData.phoneNumber} onChange={props.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formLocation">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control size='sm' type="text" name='location' value={props.formData.location} onChange={props.handleChange} />
                                </Form.Group>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>Birth Date</Form.Label>
                                    <Form.Control size='sm' type="date" name='birth_date' value={props.formData.birth_date} onChange={props.handleChange} />
                                </Form.Group>
                                <Button variant="primary" className='my-2' size='sm' type="submit">
                                    Submit
                                </Button>   
                        </div>
                        </Form>   
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
