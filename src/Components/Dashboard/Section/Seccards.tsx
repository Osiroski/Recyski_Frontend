import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './section.css'
interface IProps {
    title: string;
    digit: string;
    icon: IconDefinition;
    borderColor: string;
    progressBar: boolean;
}

const Seccards = (props: IProps) => {
    return (

        <div className={`col-xl-4 col-md-6 mb-4 border-left-${props.borderColor}`}>
            <div className="card  shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col">
                            <div className="text-xs fw-bold text-primary text-uppercase mb-1">{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.digit}</div>
                        </div>
                        {props.progressBar &&
                            <div className="col">
                                <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                            </div>
                        }
                        <div className="col-auto">
                            <FontAwesomeIcon icon={props.icon} size="2x" className="text-gray-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Seccards
