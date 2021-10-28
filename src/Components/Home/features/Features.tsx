
import './features.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Features: React.FC = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (

        <div className=" container-fluid my-3 " style={{alignContent:"center"}}>
            <div className="row featurette bg-light rounded-3" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                <div className="col-md-5 col-lg-5 my-3">
                    <h2 className="featurette-heading" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Recycling goes digital. <span className="text-muted">Using the digital space to improve our Ecosystem.</span></h2>
                    <p className="lead" data-aos="fade-up" data-aos-anchor-placement="center-bottom">See how you can participate in improving the Ecosystem by creating value out of everyday trash 🗑.</p>
                </div>
                <div className="col-md-7 col-lg-7 my-2 zoomBOut">
                    <div className="zoomBIn"></div>
                </div>
            </div>
            <div className="row featurette bg-light my-4 rounded-3" data-aos="zoom-out-right">
                <div className="col-md-5 col-lg-5 order-md-2 my-3">
                    <p className="counter-count" data-target="120"></p>
                    <h2 className="featurette-heading" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Recycling depots near you.</h2>
                    <p className="lead"data-aos="fade-up" data-aos-anchor-placement="center-bottom">All you have to do is place a request, drop your trash and walk out...rewarded obviously.</p>
                </div>
                <div className="col-md-7 col-lg-7 my-2 zoomBOut">
                    <div className="recycle"></div>                
            </div>
            </div>
            <div className="row featurette bg-light my-4 rounded-3" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="col-md-5 col-lg-5 order-md-2 my-3">
                <p className="counter-count" data-target="12"></p>
                    <h2 className="featurette-heading" data-aos="flip-left" data-aos-easing="ease-out-cubic">$12 million stuck up in trash. <span className="text-muted">The average Kenyan disposes waste that has an average 45% recycle value.</span></h2>
                    <p className="lead" data-aos="flip-left" data-aos-easing="ease-out-cubic">From vegetable waste to saw dust, there is no need to waste that waste. Recycski is a platform that connects you to the recycling market.</p>
                </div>
                <div className="col-md-7 col-lg-7 my-2 zoomBOut">
                    <div className="money"></div>
                </div>
            </div>
        </div>
    );
};