import { faCalendar, faComments, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, DropdownButton,Dropdown} from 'react-bootstrap'
import Sidebar from '../Dashboard/Sidebar/sidebar'
import Seccards from '../Dashboard/Section/Seccards'
import Header from '../Dashboard/Header/Header'
import Cards from '../Dashboard/Cards/cards'
import userService from "../../Services/user.service";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BuyModal from './buyModal'


export interface OrderData {
    id: number,
    order_id: string,
    date: string,
    location: string,
    unit: number,
    amount: number,
    item: string,
    user: number
}

const Buy = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [orders, setOrders] = useState([])
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("")
    const [ordering, setOrdering] = useState("")
    const [show, setShow] = useState(false);
    const[modalData,setModalData]=useState({id:0,order_id: '',date: '',location: '',unit: 0,amount: 0,item: '',user: 0})
    const handleClose = () => setShow(false);
    const handleShow = (data:OrderData) => {
        setShow(true)
        setModalData(data)
        }
    
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    }
    const handleOrder = (event:MouseEvent<HTMLElement>) => {  
        setOrdering(event.currentTarget.id);    
    }
    const user = useSelector((state: RootState) => state.user)
    useEffect(() => {
        userService.getBuyOrders(ordering).then(response => {
                setIsLoaded(true)
                setOrders(response.data)
            },
            (error: any) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [user.id,ordering]
    )
    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container fluid >
                <Header title="Buy" icon={faMoneyCheck} />
                <Container fluid>
                    <div className="row">
                        <Sidebar />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light2">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded-3 col-12">
                                <h1 className="h2"><FontAwesomeIcon icon={faMoneyCheck} size='sm' className='mr-2' />Market</h1>
                                <div className="btn-toolbar mb-2 mb-md-0">
                                    <div className="btn-group me-2">
                                        <input type="text" id='searchBox' placeholder='🔎 Search market'
                                            className="form-control form-control-sm mr-2"
                                            value={filter} onChange={handleSearch} />
                                        <DropdownButton variant='outline-secondary' size='sm' id="dropdown-basic-button" title="Order By">
                                            <Dropdown.Item href="#custom-cards" onClick={handleOrder} id='date'>Latest</Dropdown.Item>
                                            <Dropdown.Item href="#custom-cards" onClick={handleOrder} id='-date'>Earliest</Dropdown.Item>
                                            <Dropdown.Item href="#custom-cards" id='item' onClick={handleOrder}>Item <small>Acsending</small></Dropdown.Item>
                                            <Dropdown.Item href="#custom-cards" id='-item' onClick={handleOrder}>Item <small>Descsending</small></Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </div>
                            <Container fluid id="custom-cards">
                                <Row className="row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-2" >
                                    {orders
                                        .filter((data: OrderData) => data.item.toLowerCase().includes(filter.toLowerCase()))
                                        .map((data: OrderData) => (
                                            <Cards
                                                key={data.id} dataAos={'flip-left'}
                                                dataAosEasing={'ease-out-cubic'}
                                                anchorPlacement={'center-bottom'}
                                                item={data.item} date={data.date}
                                                price={'Ksh.' + String(data.unit * data.amount)}
                                                location={data.location} amount={data.amount} onClick={()=>handleShow(data)}/>
                                        ))
                                    }
                                </Row>
                            </Container>
                            <h2 className="my-5">Section title</h2>
                            <Container fluid>
                                <Row>
                                    <Seccards title={"Earnings (monthly)"} digit={"$40,000"} icon={faCalendar} borderColor={'primary'} progressBar={false} />
                                    <Seccards title={"Pending Requets"} digit={"18"} icon={faComments} borderColor={"warning"} progressBar={false} />
                                    <Seccards title={"Tasks"} digit={"50%"} icon={faComments} borderColor={"success"} progressBar={true} />
                                </Row>
                            </Container>
                        </main>
                    </div>
                </Container>
                <BuyModal show={show} handleClose={handleClose} title={modalData.item}
                date={modalData.date} amount={modalData.amount} unit={modalData.unit} location={modalData.location}/>
            </Container>
        )
    }
}
export default Buy
