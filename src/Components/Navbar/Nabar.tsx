import { Container, Navbar, NavItem,Image, Nav, Dropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';
import bamboo from '../../assets/bamboo.jpg'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import './Navbar.css'


const Navigation = () => {
    const state = useSelector((state:RootState) => state.user)
    const logout=()=> {
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <Navbar expand="lg" bg="light" className="rounded-3 navshadow">
            <Container fluid>
                <Navbar.Brand href="/">Recyski</Navbar.Brand>
                <NavbarToggle className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggle>
                <NavbarCollapse className="collapse bg-light" id="navbarSupportedContent">
                    <Nav className="me-auto ml-auto mb-2 mb-lg-0 justify-content-center">
                        <NavItem className=" mr-2">
                            <NavLink className="btn active" aria-current="page" to="/" >Home</NavLink>
                        </NavItem>
                        <Dropdown className="dropdown mr-2">
                            <Dropdown.Toggle className="nav-link" variant="outline-sccuess" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="true">
                                Learn More
                            </Dropdown.Toggle>
                            <Dropdown.Menu align={'start'} aria-labelledby="navbarDropdown">
                                <Dropdown.Header>Interests</Dropdown.Header>
                                <Dropdown.Divider className=" divider"></Dropdown.Divider>
                                <Dropdown.Item className=" fs-m" href="/about">About Us</Dropdown.Item>
                                <Dropdown.Item className=" fs-m" href="/">Another action</Dropdown.Item>
                                <Dropdown.Item className=" fs-m" href="/">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavItem className="mr-2">
                            <NavLink className="btn" to="/" tabIndex={-1}>Get Started</NavLink>
                            
                        </NavItem>
                    </Nav>
                    {state.isLoggedin ?
                        <div className="d-flex mb-2 justify-content-center">
                            <Image alt="" className='mr-2' src={bamboo} roundedCircle width={'70'} height={'70'} />
                            <NavLink className="btn btn-lg btn-outline-info me-2" to="/login" onClick={logout}>Log out</NavLink>
                            
                        </div>
                        :
                        <div className="d-flex mb-2 justify-content-center">
                            <NavLink className="btn btn-outline-info me-2" to="/login" >Sign in</NavLink>
                            <NavLink className="btn btn-outline-success me-2 fw-2" to="/register">Register</NavLink>
                        </div>
                    }
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
