import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Card } from "react-bootstrap"

import Rates from "./Rates"

const Revenue = () => {
    return (
        <Row className="row">
            <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                <Card className="card shadow mb-4">
                    <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary"><FontAwesomeIcon icon={faExchangeAlt} size="1x" /> Exchange Rates</h6>
                    </Card.Header>
                    <Card.Body>
                        <Rates />
                    </Card.Body>
                </Card>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                <Card className="shadow mb-4">
                    <Card.Header className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                        <div className="card-body overflow-scroll">
                        </div>
                    </Card.Header>
                </Card>
            </div>
        </Row>
    )
}

export default Revenue
