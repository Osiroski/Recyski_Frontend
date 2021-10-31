
import { Col, Container, Row, Image } from 'react-bootstrap'
import visa from '../../assets/1.svg'
import coke from '../../assets/2.svg'
import sony from '../../assets/3.svg'


const Brands = () => {
    return (
        <Container fluid>
            <Row className="bg-light rounded-3" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                <Col>
                    <Row>
                        <h2 className="display-4 text-center">
                            Our Partners
                        </h2>
                    </Row>
                    <Row className="row-cols-1 row-cols-md-2 g-3">
                        <Col id='brand1' className="my-3">
                            <Image src={visa} alt="coke" width='100%' height='100%' />
                        </Col>
                        <Col id='brand2' className="my-3">
                            <Image src={coke} alt="coke" width='100%' height='100%' />
                        </Col>
                        <Col id='brand3' className="my-3">
                            <Image src={sony} alt="coke" width='100%' height='100%' />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default Brands
