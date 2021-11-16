import { useEffect, useState} from "react";
import { Card, Col} from "react-bootstrap";
import AOS from 'aos';
import './cards.css'
 interface Iprops{
    dataAos:string
    dataAosEasing?:string
    item:string 
    price:string
    location:string
    anchorPlacement?:string
    amount:number
    date:string
    onClick?:(data:any)=> void
 }
const Cards = (props:Iprops) => {
    const [back, setback] = useState('card-3')   
    useEffect(() => {
        AOS.init({
            duration: 2500
        });
        if(props.item==='Plastic Bottles'){
            setback('card-4')
        }
        if(props.item==='Saw Dust'){
            setback('card-2')
        }
        if(props.item==='Vegetable Waste'){
            setback('card-1')
        }
    }, [props.item]);
    return (
                <Col data-aos={props.dataAos} data-aos-easing={props.dataAosEasing} data-aos-anchor-placement={props.anchorPlacement} onClick={props.onClick}>
                    <Card className={`card-cover h-100 overflow-hidden text-white ${back} rounded-5 shadow-lg`} >
                        <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 display-6 lh-1 fw-bold">{props.item}</h2>
                            <h2 className=" mb-2 display-6 lh-1 fw-bold">{props.price} </h2>
                            <ul className="d-grid list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <small>Units Required: {props.amount}</small>
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <small>Posted: {props.date}</small>
                                </li>
                                <li className="d-flex align-items-center me-3">
                                    <small>{props.location}</small>
                                </li>
                            </ul>
                        </div>
                    </Card>
                    
                </Col>
    )
}

export default Cards
