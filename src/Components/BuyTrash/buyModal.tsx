import { faLocationArrow, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ChangeEvent, useEffect, useState } from "react"
import { Modal, Button,Row ,Col,Form, InputGroup, FormControl } from "react-bootstrap"
import './buy.css'


interface IProps{
    show:boolean
    handleClose:()=>void;
    title:string
    date:string
    location:string
    amount:number
    unit:number
}
const BuyModal = (props:IProps) => {
  const [unitBuy, setunitBuy] = useState('')
  const [valid,setValid]= useState('')
  useEffect(() => {
    if (parseInt(unitBuy)>props.unit){
      setValid('is-invalid')
    }
    else {
      setValid('')
    }
  }, [unitBuy,props.unit])
  const handleUnitChange=(event:ChangeEvent<HTMLInputElement>)=>{
    if (event.currentTarget.value===''){
      setunitBuy('0');
    }
    if (event.currentTarget.value!==''){
      setunitBuy(event.currentTarget.value);
    } 
  }
  
    return (
        <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center '>
            <Button  variant='info' size='sm' className='btn-circle mr-2'><FontAwesomeIcon icon={faLocationArrow} size='sm'/></Button>{props.location}</div>
          <Row className='text-center mt-3'>
            <Col><div className='border-bottom-info my-2'>Units left: {props.unit}</div></Col>
            <Col><div className='border-bottom-danger my-2'>Amount: {props.amount}</div></Col>
          </Row>
          <Row className='text-center mt-3'>
            <Col>
              <Button variant="outline-warning" size='sm' className="btn-icon-split">
                <div id='split'>
                  <FontAwesomeIcon icon={faUser} size='sm' className='mr-2' /></div>
                  <span className="button-text">Contact User</span>
              </Button>
            </Col>
          </Row>
          <Row>
          <InputGroup className="mt-3">
            <FormControl aria-label="Unit" aria-describedby="basic-addon1" value={unitBuy} onChange={handleUnitChange} className={valid}/>
            <Form.Control.Feedback type="invalid">Cannot exceed available unit!</Form.Control.Feedback>
          </InputGroup>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" size='sm' onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="outline-warning" size='sm' onClick={props.handleClose} className="btn-icon-split">
            <div id='split'>
              <FontAwesomeIcon icon={faUser} size='sm' className='mr-2' /></div>
              <span className="button-text">Buy</span>
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default BuyModal
