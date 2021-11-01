import { useEffect } from "react";
import { Card, Container, Row, Col} from "react-bootstrap";
import AOS from 'aos';
import './cards.css'

const Cards = () => {
    useEffect(() => {
        AOS.init({
            duration: 2500
        });
    }, []);
    return (
        <Container fluid  id="custom-cards">
            <Row className="row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-2" >
                <Col data-aos="flip-left" data-aos-easing="ease-out-cubic">
                    <Card className="card-cover h-100 overflow-hidden text-white card-1 rounded-5 shadow-lg" >
                        <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 display-6 lh-1 fw-bold">Plastic Bottle 🍾 </h2>
                            <h2 className=" mb-2 display-6 lh-1 fw-bold"> Ksh. 3 </h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                    <small>Earth</small>
                                </li>

                            </ul>
                        </div>
                    </Card>
                </Col>
                <Col data-aos="zoom-out-right">
                    <Card className="card-cover h-100 overflow-hidden text-white card-2 rounded-5 shadow-lg" >
                        <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mb-2 display-6 lh-1 fw-bold">Scrap metal</h2>
                            <h2 className=" mb-2 display-6 lh-1 fw-bold"> Ksh.20 per kilo </h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                    <small>Scrapyard</small>
                                </li>

                            </ul>
                        </div>
                    </Card>
                </Col>
                <Col data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <Card className="card-cover h-100 overflow-hidden text-white card-3 rounded-5 shadow-lg" >
                        <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                            <h2 className="pt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                            <ul className="d-flex list-unstyled mt-auto">

                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="1em" height="1em"><use xlinkHref="#geo-fill"></use></svg>
                                    <small>Pakistan</small>
                                </li>

                            </ul>
                        </div>
                    </Card>
                </Col>
                <Col data-aos="fade-right" data-aos-anchor-placement="center-bottom">
                    <Card className="card-cover h-100 overflow-hidden text-white card-4 rounded-5 shadow-lg" >
                        <div className="d-flex flex-column h-100 p-2 pb-3 text-shadow-1">
                            <h2 className="pt-5 mb-4 display-6 lh-1 fw-bold">Compost and Vegetable waste</h2>
                            <ul className="d-flex list-unstyled mt-auto">
                                <li className="d-flex align-items-center me-3">
                                    <svg className="bi me-2" width="0.5em" height="0.5em"><use xlinkHref="#geo-fill"></use></svg>
                                    <small>California</small>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Cards
