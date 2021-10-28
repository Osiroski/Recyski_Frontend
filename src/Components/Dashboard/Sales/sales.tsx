
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header/Header";
import Seccards from "../Section/Seccards";
import Sidebar from "../Sidebar/sidebar";

import Revenue from "./Revenue";

const Sales = () => (
    <div className="container-fluid">
        <Header title="Sales" />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light2">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded-3 col-12">
                        <h1 className="h2">Revenue</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar"></span>
                                This week
                            </button>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <Seccards title={"Earnings (monthly)"} digit={"$40,000"} icon={faCalendar} borderColor={"border-left-primary"} progressBar={false} />
                            <Seccards title={"Pending Requets"} digit={"18"} icon={faComments} borderColor={"border-left-warning"} progressBar={false} />
                            <Seccards title={"Tasks"} digit={"50%"} icon={faComments} borderColor={"border-left-success"} progressBar={true} />
                        </div>
                        <Revenue/>
                    </div>
                    
                </main>
            </div>
        </div>
    </div>
)

export default Sales
