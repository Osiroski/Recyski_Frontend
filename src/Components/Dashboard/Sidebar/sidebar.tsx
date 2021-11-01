import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { faMedal, faMoneyBillWave, faPlusCircle, faShoePrints, faShoppingCart, faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Nav } from "react-bootstrap"

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="pt-1">
            <Nav className="flex-column">
                <Nav.Item >
                    <Nav.Link className="active" aria-current="page" href="/dashboard">
                        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2"/>
                        Dashboard
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/sales">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2"/>
                        Sell Trash
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/buy">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2"/>
                        Buy Products
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/profile">
                    <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                        Account
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/history">
                    <FontAwesomeIcon icon={faShoePrints} className="mr-2"/>
                        History
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/achievements">
                    <FontAwesomeIcon icon={faMedal} className="mr-2"/>
                        Achievements
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a className="link-secondary" href="/addreport" aria-label="Add a new report">
                <FontAwesomeIcon icon={faPlusCircle}/>
                </a>
            </h6>
           
        </div>
    </nav>

    )
}

export default Sidebar
