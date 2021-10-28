import Rates from "../Sales/Rates"
import Revenue from "../Sales/Revenue"
import ProgressBar from "./progressBar"

const Illustration = () => {
    return (
        <div className="container-fliud">
            <Revenue/>
            <div className="row">
                <div className="col-lg-6 mb-4 col-md-12 col-sm-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Targets</h6>
                        </div>
                        <div className="card-body">
                            <ProgressBar title={"Plastic Weight"} value={"20%"} barColor={"bg-danger"} />
                            <ProgressBar title={"Metal"} value={"40%"} barColor={"bg-warning"} />
                            <ProgressBar title={"Customer Database"} value={"60%"} barColor={"bg-info"} />
                            <ProgressBar title={"Vegetable waste"} value={"80%"} barColor={"bg-primary"} />
                            <ProgressBar title={"Account Setup Complete!"} value={"100%"} barColor={"bg-success"} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4 col-md-12 col-sm-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                        </div>
                        <div className="card-body">
                            <Rates />
                        </div>
                    </div>
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                        </div>
                        <div className="card-body">
                            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce
                                CSS bloat and poor page performance. Custom CSS classNamees are used to create
                                custom components and custom utility classNamees.</p>
                            <p className="mb-0">Before working with this theme, you should become familiar with the
                                Bootstrap framework, especially the utility classNamees.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Illustration
