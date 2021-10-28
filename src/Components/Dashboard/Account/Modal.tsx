
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import looks from '../../../assets/looks.jpg'
// import { Forms } from "../../Forms/Forms";
// import { minLength, required, validEmail } from "../../Forms/validators";
const Modal = () => {
    return (
        <div className="modal fade" id="exampleModalCenteredScrollable" tabIndex={-1}
            aria-labelledby="exampleModalCenteredScrollableTitle" data-bs-backdrop="static" data-bs-keyboard="false"
            aria-hidden="true" style={{ display: "none" }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenteredScrollableTitle"><FontAwesomeIcon icon={faPenNib} className="mr-2" />Edit Profile</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-6">
                                <Image src={looks} roundedCircle={true} width="160" height="160" />
                            </div>
                            <div className="col-6">
                                <input type="file" id='uploadImage' className="form-control form-control-sm" aria-label="Small file input example" />
                            </div>
                        </div>
                        <div className="row mt-3">
                        {/* <Forms defaultValues={{ name: "", email: "", password: "" }}
                        validationRules={{
                            email: [{ validator: required },{validator:validEmail}],
                            firstname: { validator: required },
                            lasttname: { validator: required },
                            password: [{ validator: required }, {validator: minLength, arg: 8}],
                            password2: [{ validator: required }, {validator: minLength, arg: 8}]
                        }}>
                        <Forms.Field name="username1" label="Username" type="Text" disabled={false}/>
                        <Forms.Field name="firstname" label="First Name" type="Text" disabled={false}/>
                        <Forms.Field name="lastname" label="Last Name" type="Text" disabled={false}/>
                        <Forms.Field name="email" label="Your email address" type="Email" disabled={false}/>
                        <Forms.Field name="password" label="Password" type="Password" auto-complete="new-password" disabled={false} />
                        <Forms.Field name="password2" label="Confirm Password" type="Password" auto-complete="new-password" disabled={false}/>
                    </Forms> */}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-sm btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
