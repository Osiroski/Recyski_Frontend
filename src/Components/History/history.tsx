import { Container, Row, Col, Pagination } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './history.css'
import { faHistory, faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import userService from "../../Services/user.service";
import { ChangeEvent, useEffect, useState } from "react";
import Header from "../Dashboard/Header/Header";
import Sidebar from "../Dashboard/Sidebar/sidebar";


interface HistoryData {
    id: number;
    item: string;
    location: string;
    date: string;
    points: number;
    units: number;
    user: number;
}

const History = () => {
    const [table, setTable] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState("")
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    }
    const user = useSelector((state: RootState) => state.user)
    useEffect(() => {
        userService.getHistory(user.id)
            .then(response => {
                setIsLoaded(true)
                setTable(response.data)
            },
                (error: any) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [user.id]
    )
    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Container fluid className="bg-light2">
                <Header title="History" icon={faHistory} />
                <Container fluid className="container-fluid">
                    <Row>
                        <Sidebar />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light2">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom rounded-3 col-12">
                                <h1 className="h2 dashtitle">
                                    <FontAwesomeIcon icon={faHistory} size='sm' className='mr-2' />
                                    History
                                </h1>
                            </div>
                            <div className="col-md-offset-1 col-md-12">
                                <div className="panel">
                                    <div className="panel-heading">
                                        <Row>
                                            <div className="col col-sm-3 col-xs-12">
                                                <h4 className="title">Transactions <span>List</span></h4>
                                            </div>
                                            <div className="col-sm-9 col-xs-12 text-center">
                                                <div className="btn_group">
                                                    <input type="text"
                                                        className="form-control mr-2"
                                                        placeholder="Search"
                                                        value={filter}
                                                        onChange={handleSearch} />
                                                    <button className="btn btn-default" title="Reload">
                                                        <FontAwesomeIcon icon={faSyncAlt} size='sm' />
                                                    </button>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="panel-body table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Date</th>
                                                    <th>Item</th>
                                                    <th>Units</th>
                                                    <th>City</th>
                                                    <th>Points</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {table
                                                    .filter((data: HistoryData) => data.item.toLowerCase().includes(filter.toLowerCase()))
                                                    .map((data: HistoryData) => (
                                                        <tr key={data.id}>
                                                            <td>{data.id}</td>
                                                            <td>{data.date}</td>
                                                            <td>{data.item}</td>
                                                            <td>{data.units}</td>
                                                            <td>{data.location}</td>
                                                            <td>{data.points}</td>
                                                        </tr>))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="panel-footer">
                                        <Row >
                                            <Col className="col-sm-6 col-xs-6">showing <b>5</b> out of <b>25</b> entries</Col>
                                            <div className="col-sm-12 col-xs-12">
                                                <Pagination>
                                                    <Pagination.First />
                                                    <Pagination.Prev />
                                                    <Pagination.Item active>{1}</Pagination.Item>
                                                    <Pagination.Item>{2}</Pagination.Item>
                                                    <Pagination.Next />
                                                    <Pagination.Last />
                                                </Pagination>
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </main>

                    </Row>
                </Container>
            </Container>
        )
    }
}

export default History
