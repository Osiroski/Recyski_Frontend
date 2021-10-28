import { faChessRook, faMedal, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProgressBar from "../Dashboard/Section/progressBar"

interface IProps {
    item: string;
    quantity:number;
    counter:number;
    icon: IconDefinition;
    reward: string;
    progressTitle: string
    borderColor:string;
    value:string;
    barColor:string;
}

const Goal = (props:IProps) => {
    return (
        <div className="col-lg-6 my-3 col-md-12 col-sm-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Goal <FontAwesomeIcon icon={faChessRook} /></h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xl-6 col-md-6 mb-4 border-left-warning">
                                    <div className="card  shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col">
                                                    <div className="text-sm fw-bold text-warning mb-1">Recycle <mark>{props.quantity}</mark>{props.item}</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.counter} left</div>
                                                </div>
                                                <div className="col-auto"><FontAwesomeIcon icon={props.icon} size='2x' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-xl-6 col-md-6 mb-4 border-left-${props.borderColor}`}>
                                    <div className="card  shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col">
                                                    <div className="col-auto">
                                                        <FontAwesomeIcon icon={faMedal} size='2x' />
                                                        <ul className="list-unstyled">
                                                            <li ><div className="text-xs fw-bold text-primary text-uppercase mb-1">Rewards</div>
                                                                <ul>
                                                                    <li>Ksh. <code>{props.reward}</code></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <ProgressBar title={props.progressTitle} value={props.value} barColor={props.barColor} />
                        </div>
                    </div>
                </div>
    )
}

export default Goal
