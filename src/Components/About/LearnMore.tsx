import { faCoins, faExchangeAlt, faRecycle, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Image, Row, Col, Card, Button,Modal } from 'react-bootstrap'
import AOS from 'aos';
import bamboo from '../../assets/bamboo.jpg'
import depots from '../../assets/Recycling.gif'
import looks from '../../assets/looks.jpg'
import Sdgaccordion from './sdgaccordion';
import Brands from './brands';
import Rates from '../Dashboard/Sales/Rates';
const LearnMore = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out-sine"
    });
  }, []);
  return (
    <div id="LearnMore">
      <div className="bd-example">
        <Row className="row-cols-1 row-cols-md-2 g-4">
          <Col>
            <Card className="about-card rounded-3">
              <Card.Img id="card1" alt="" src={bamboo} className="rounded-3" />
              <Card.Body>
                <Card.Title data-aos="slide-right"><FontAwesomeIcon icon={faRecycle} size="lg" /> Recycle your plastic</Card.Title>
                <Card.Text className=" lead" data-aos="zoom-out">
                  Recyski intends to create value to promote recycling culture.
                  The waste materials are exchanged based on rates and paid instantly.
                  Anybody is welcomed 🧕👴👦👶,
                  No limits. </Card.Text>
                <Button
                  href="/pricing"
                  variant={'outline-info'}
                  data-aos="zoom-in"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalDefault">
                  <FontAwesomeIcon icon={faExchangeAlt} size="1x" />
                    <span>Exchange Rates</span>
                </Button>
                <Card.Text data-aos="slide-right">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="about-card">
              <Card.Header className="display-6" data-aos="slide-left">
                <FontAwesomeIcon icon={faStore} size="1x" /> Recycling Depots
              </Card.Header>
              <Card.Img alt="" src={depots} className="rounded-5" height="65%" width="65%" />
              <Card.Body>
                <Card.Title data-aos="slide-left">Visit the nearest depot</Card.Title>
                <Card.Text data-aos="zoom-in">Convert your recycled materials into cash</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                Over 200 Recycle Depots
              </Card.Footer>
            </Card>
          </Col>
          <Col 
          data-aos="zoom-out-right">
            <Card className="about-card card-cover h-100 overflow-hidden text-white card-2 rounded-5 shadow-lg" >
              <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">You can earn income while conserving nature <FontAwesomeIcon icon={faCoins} size="1x" /></h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <FontAwesomeIcon icon={faStore} size="lg" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    Nairobi
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
          <Col 
          data-aos="slide-left">
            <Card className="about-card">
              <Row className="g-0">
                <div className="col-md-4">
                  <Image id="card2" alt="" src={looks} width="70%" className="rounded-2" />
                </div>
                <div className="col-md-8">
                  <Card.Body>
                    <Card.Title>NEEMA</Card.Title>
                    <Card.Text className="card-text">NEEMA guidelines go here</Card.Text>
                    <Card.Text className="card-text"><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
                  </Card.Body>
                </div>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      <Sdgaccordion />
      <Brands />
      <Modal className="fade" id="exampleModalDefault" 
      tabIndex={-1} aria-labelledby="exampleModalLabel" 
      aria-hidden="true" style={{ display: 'none' }}>
        <Modal.Dialog >
          <div className="modal-content">
            <Modal.Header className="modal-header">
              <Modal.Title className="modal-title" id="exampleModalLabel">Exchange rates</Modal.Title>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </Modal.Header>
            <Modal.Body>
              <Rates />
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </Modal.Footer>
          </div>
        </Modal.Dialog>
      </Modal>
    </div>

  )
}

export default LearnMore
