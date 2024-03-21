import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFile, faUser,faBars,faFileExport ,faMobile,faShuffle,faFolder} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import PieChart from './PieChart';

const Dashboard = () => {
    const [record, setRecord] = useState([]);
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(res => setRecord(res))
    }
    useEffect(() => {
        getData();
    },)
    return (
        <div>
            <div className='row '>
                <div className="col-3 col-lg-2 sidebar-offcanvas pl-0" style={{ backgroundColor: 'black' }}>
                    <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                        <li className="nav-item mb-2 mt-3">
                            <a className="nav-link text-secondary" href="#">
                                <FontAwesomeIcon icon={faHouse} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}>  Home</span>

                            </a>
                        </li>
                        <li className="nav-item mb-2 ">
                            <a className="nav-link text-secondary" href="#">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}>Overview</span>
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#submenu1" >
                                <FontAwesomeIcon icon={faFile} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}> Reports▾</span>
                            </a>
                           
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#">
                            <FontAwesomeIcon icon={faBars} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}>Analytics</span>
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#">
                            <FontAwesomeIcon icon={faFileExport} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}>Export</span>
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#">
                            <FontAwesomeIcon icon={faMobile} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}>Snippets</span>
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#">
                            <FontAwesomeIcon icon={faShuffle} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}>Flex</span>
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#">
                            <FontAwesomeIcon icon={faFolder} />
                                <span className="ml-3" style={{ paddingLeft: '10px' }}>Layouts</span>
                            </a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#">Templates</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a className="nav-link text-secondary" href="#">Themes</a>
                        </li>
                    </ul>
                </div>
                <div className="col-9 pt-5 mt-3">
                    <p className="lead d-none d-sm-block " style={{ color: 'black', fontSize: '30px', fontWeight: 'bold' }}>
                        Employee Details and Records</p>
                    <div className="row mb-3">
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card bg-success text-white h-100">
                                <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                                    <div className="rotate">
                                        <i className="fa fa-user fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Users</h6>
                                    <h1 className="display-4">134</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-danger h-100">
                                <div className="card-body bg-danger">
                                    <div className="rotate">
                                        <i className="fa fa-list fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Posts</h6>
                                    <h1 className="display-4">87</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-info h-100">
                                <div className="card-body bg-info">
                                    <div className="rotate">
                                        <i className="fab fa-twitter fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Tweets</h6>
                                    <h1 className="display-4">125</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-warning h-100">
                                <div className="card-body">
                                    <div className="rotate">
                                        <i className="fa fa-share fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Shares</h6>
                                    <h1 className="display-4">36</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row ">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h5 className="mt-3 mb-3 text-secondary" style={{ color: 'black', fontWeight: 'bold' }}>
                                Records Of Employee
                            </h5>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead className="thead-light">
                                        <tr>
                                            <th> Sr No</th>
                                            <th>Name</th>
                                            <th>Email Id</th>
                                            <th>Area</th>
                                            <th>Record Data</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            record.slice(0, 10).map((output) =>
                                                <tr>
                                                    <td>{output.id}</td>
                                                    <td>{output.name}</td>
                                                    <td>{output.email}</td>
                                                    <td>{output.username}</td>
                                                    <td>{output.website}</td>
                                                    <td></td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                            <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                            <div className='pie' style={{ height: "700px", width: "500px", padding: '50px' }}><PieChart /></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;