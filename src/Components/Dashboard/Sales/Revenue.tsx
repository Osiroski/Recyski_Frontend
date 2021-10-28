import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Rates from "./Rates"

const Revenue = () => {
    return (
        <div className="row">
            <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary"><FontAwesomeIcon icon={faExchangeAlt} size="1x" /> Exchange Rates</h6>
                    </div>
                    <div className="card-body">
                        <Rates />
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-12 col-sm-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                        <div className="card-body overflow-scroll">
                            <Rates />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Revenue
