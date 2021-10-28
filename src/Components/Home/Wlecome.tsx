
import { Button } from "react-bootstrap";
import feature from './feature.png';
export const Welcomme: React.FC = () => {
    return (
        
            <div className="container-fluid my-2 ">
                <div className="row p-2 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg bg-light">
                    <div className="col-lg-7 p-2 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1">One's trash 🗑 is another's treasure💸</h1>
                        <p className="lead">Learn how you can move your recyclable ♻ waste into your wallet.</p>
                        <div className="mb-2 bg-light">
                            <figure className=" mb-0">
                                <blockquote className="blockquote">
                                    <p>Join East Africa's No. 1 Digital Waste Market and find out how valuable your waste can be.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer mb-0 text-muted">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <Button type="button" variant="outline-primary" size="lg" className="px-4 me-md-2 fw-bold">Learn how</Button>
                            <Button type="button" variant="outline-secondary" size="lg" className="px-4 fw-bold">Goals</Button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src={feature} alt="" width="500" />
                    </div>
                </div>
            </div>
    );
};