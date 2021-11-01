
import Cards from './Cards/cards'
import './dashboard.css'
import Header from './Header/Header'

import Sidebar from './Sidebar/sidebar'
import Illustration from "./Section/Illustration"
import Seccards from "./Section/Seccards"
import { faCalendar, faComments, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { Container, Row } from 'react-bootstrap'

const Dashboard = () => {
    return (
        <Container fluid >
            <Header title="Dashboard" icon={faTachometerAlt}/>
            <Container fluid>
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light2">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded-3 col-12">
                            <h1 className="h2">Dashboard</h1>
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
                        <Cards />
                        <h2 className="my-5">Section title</h2>
                        <Container fluid>
                            <Row>
                            <Seccards title={"Earnings (monthly)"} digit={"$40,000"} icon={faCalendar} borderColor={'primary'} progressBar={false} />
                            <Seccards title={"Pending Requets"} digit={"18"} icon={faComments} borderColor={"warning"} progressBar={false} />
                            <Seccards title={"Tasks"} digit={"50%"} icon={faComments} borderColor={"success"} progressBar={true} />
                            </Row>
                        </Container>
                        <Illustration />
                    </main>
                </div>
            </Container>
        </Container>
    )
}
export default Dashboard
