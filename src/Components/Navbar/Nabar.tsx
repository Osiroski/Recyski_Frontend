import { Container, Nav, NavItem,Image } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useSelector } from 'react-redux';
import bamboo from '../../assets/bamboo.jpg'


import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/store/store';
import './Navbar.css'

const Navigation = () => {
    const state = useSelector((state:RootState) => state.user)
    const logout=()=> {
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light rounded-3 navshadow">
            <Container fluid>
                <a className="navbar-brand" href="/">Recyski</a>
                <NavbarToggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggle>
                <NavbarCollapse className="collapse navbar-collapse bg-light" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ml-auto mb-2 mb-lg-0">
                        <NavItem className=" mr-2">
                            <NavLink className="btn active" aria-current="page" to="/" >Home</NavLink>
                        </NavItem>
                        <NavItem className="dropdown mr-2">
                            <DropdownToggle className="nav-link" variant="outline-sccuess" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">
                                Learn More
                            </DropdownToggle>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><h6 className="dropdown-header">Interests</h6></li>
                                <li><hr className="dropdown-divider divider" /></li>
                                <li><a className="dropdown-item fs-m" href="/about" >About Us</a></li>
                                <li><a className="dropdown-item fs-m" href="/">Another action</a></li>
                                <li><a className="dropdown-item fs-m" href="/">Something else here</a></li>
                            </ul>
                        </NavItem>
                        <NavItem className="mr-2">
                            <NavLink className="btn" to="/" tabIndex={-1}>Get Started</NavLink>
                            
                        </NavItem>
                    </ul>
                    {state.isLoggedin ?
                        <div className="d-flex mb-2">
                            <Image alt="" className='mr-2' src={bamboo} roundedCircle width={'70'} height={'70'} />
                            <NavLink className="btn btn-lg btn-outline-info me-2" to="/login" onClick={logout}>Log out</NavLink>
                            
                        </div>
                        :
                        <div className="d-flex mb-2">
                            <NavLink className="btn btn-outline-info me-2" to="/login" >Sign in</NavLink>
                            <NavLink className="btn btn-outline-success me-2 fw-2" to="/register">Register</NavLink>
                        </div>

                    }
                </NavbarCollapse>
            </Container>
        </Nav>
    )
}

export default Navigation
