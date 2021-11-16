import { Container, Navbar, NavItem,Image, Nav, Dropdown, Button } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import './Navbar.css'
import { userLogout } from '../../redux/actions/actionCreators';
import userService from '../../Services/user.service';


const Navigation = () => {
    const dispatch = useDispatch()
    const state = useSelector((state:RootState) => state.user)
    const profile =useSelector((state: RootState) => state.profile);
    const handleLogout = ()=> {
        dispatch(userLogout())
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
                        <Dropdown className="mr-2">
                            <Dropdown.Toggle className="nav-link" variant="outline-sccuess" id="navbarDropdown">
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
                        {!state.isLoggedin ?
                        <NavItem className="mr-2">
                            <NavLink className="btn" to="/login" tabIndex={-1}>Get Started</NavLink>             
                        </NavItem>
                        :
                        <NavItem className="mr-2">
                            <NavLink className="btn" to="/dashboard" tabIndex={-1}>Dashboard</NavLink>             
                        </NavItem>
                        
                        }
                    </Nav>
                    {state.isLoggedin ?
                        <div className="d-flex mb-2 justify-content-center">
                            <Image id='icon' className='mr-2' src={userService.getProfileImage(profile.profile_image)} roundedCircle width={'70'} height={'70'} />
                            <Button size='sm' variant='outline-info' className="me-2" onClick={handleLogout}>Log out</Button>
                            
                        </div>
                        :
                        <div className="d-flex mb-2 justify-content-center">
                            <NavLink className="btn btn-outline-info me-2" to="/login" >Sign In</NavLink>
                            <NavLink className="btn btn-outline-success me-2 fw-2" to="/register">Register</NavLink>
                        </div>
                    }
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
