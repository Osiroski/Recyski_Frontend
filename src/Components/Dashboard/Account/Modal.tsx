
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import looks from '../../../assets/looks.jpg'
import { BasicForm, Inputs } from "../../Forms";
const Modal = () => {
    const handleSubmit = (data: any) => {
        console.log(data);
    }
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
                            <div className="col-6 mt-3">
                                <input type="file" id='uploadImage' className="form-control form-control-sm" aria-label="Small file input example" />
                            </div>
                        </div>
                        <div className="row mt-3">
                        <BasicForm onSubmit={handleSubmit} type={'login'} >
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
