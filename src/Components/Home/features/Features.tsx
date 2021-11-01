
import './features.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import {  Row } from 'react-bootstrap';

interface IProps{
    data_aos:string;
    data_aos_easing:string;
    data_heading_aos:string;
    data_aos_anchor_placement:string;
    zoom:string;
    heading:{
        title:string;
        muted:string;
        text:string;
    }
}

export const Features = (props:IProps) => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
            <Row className="featurette bg-light rounded-3" data-aos={props.data_aos} data-aos-easing={props.data_aos_easing}>
                <div className="col-md-5 col-lg-5 my-3">
                    <h2 
                    className="featurette-heading" 
                    data-aos={props.data_heading_aos} 
                    data-aos-anchor-placement={props.data_aos_anchor_placement}>
                        {props.heading.title} 
                        <span className="text-muted">{props.heading.muted}</span></h2>
                    <p className="lead" data-aos={props.data_heading_aos} data-aos-anchor-placement={props.data_aos_anchor_placement}>{props.heading.text}</p>
                </div>
                <div className="col-md-7 col-lg-7 my-2 zoomBOut">
                    <div className={props.zoom}></div>
                </div>
            </Row>
    );
};