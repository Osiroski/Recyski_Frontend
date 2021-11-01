
import { faBoxTissue, faCarrot, faCloudMeatball, faCompass, faLevelUpAlt, faWineBottle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Goal from "./Goal"
import './achieve.css'
import { Button, Container, Row } from "react-bootstrap"



const Achieve = () => {
    return (
        <Container fluid className="bg-light my-3">
            <Row>
                <div className="btn-toolbar mb-2 mb-md-0 my-2" style={{ justifyContent: "center" }}>
                    <div className="btn-group me-2">
                        <Button
                            variant='outline-info'
                            size='sm'
                            className="fw-bold">
                            <FontAwesomeIcon icon={faCompass} />
                            Goals
                        </Button>
                        <Button
                            variant='outline-info' size='sm'
                            className="fw-bold">
                            <FontAwesomeIcon icon={faLevelUpAlt} />
                            Level
                        </Button>
                    </div>
                    <Button variant='outline-secondary' size='sm' className="dropdown-toggle">
                        Filter
                    </Button>
                </div>
            </Row>

            <Row>
                <div className="display-5">Targets</div>
                <Goal item={" plastic bottles"}
                    quantity={20} counter={16} icon={faWineBottle} reward={"20 airtime"}
                    progressTitle={"Recycle 20 plastic bottles"}
                    borderColor={"warning"} value={"20%"} barColor={"bg-danger"} />
                <Goal item={" kg of Paper"}
                    quantity={10} counter={6} icon={faBoxTissue} reward={"200 Naivas Voucher"}
                    progressTitle={"Recycle 10 kg of Newspaper/Carton"}
                    borderColor={"success"} value={"40%"} barColor={"bg-success"} />
                <Goal item={" kg of scrap metal"}
                    quantity={10} counter={8} icon={faCloudMeatball} reward={"200 Naivas Voucher"}
                    progressTitle={"Recycle 10 kg of scrap metal"}
                    borderColor={"success"} value={"20%"} barColor={"bg-info"} />
                <Goal item={" bags of vegetable waste"}
                    quantity={5} counter={4} icon={faCarrot} reward={"200 Naivas Voucher"}
                    progressTitle={"Recycle 5 bags of vegetable waste"}
                    borderColor={"success"} value={"10%"} barColor={"bg-dark"} />
            </Row>
            <Row>
                <div className="display-5 my-4">Level</div>
            </Row>
            <Row>
                <div className="my-3">
                    <div className="progress mb-4">
                        <div className="progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{ width: "20%" }}></div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Achieve
