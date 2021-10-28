import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
import { faMedal, faMoneyBillWave, faPlusCircle, faShoePrints, faShoppingCart, faTachometerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Sidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/dashboard">
                        <FontAwesomeIcon icon={faTachometerAlt} className="mr-2"/>
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/sales">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2"/>
                        Sell Trash
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/buy">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2"/>
                        Buy Products
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/profile">
                    <FontAwesomeIcon icon={faUserCircle} className="mr-2"/>
                        Account
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/history">
                    <FontAwesomeIcon icon={faShoePrints} className="mr-2"/>
                        History
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/achievements">
                    <FontAwesomeIcon icon={faMedal} className="mr-2"/>
                        Achievements
                    </a>
                </li>
            </ul>
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
