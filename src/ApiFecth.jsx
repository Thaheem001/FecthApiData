import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';
import jsondata from './Data.json';
import './App.css';


function ApiFecth() {
    const [users, setUsers] = useState([]);
    const showMyCardData = async () => {
        const responce1 = await fetch('https://hn.algolia.com/api/v1/search?query=arsl');
        console.log(await responce1);
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        setUsers(await responce.json());
    }
    useEffect(() => {
        showMyCardData();
    }, []);

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 4;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <tr >
                    <td>{user.id}</td>
                    <td>{user.title}</td>
                    <td>{user.body}</td>
                </tr>
            );
        });

    const pageCount = Math.ceil(users.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const [search, setSearch] = useState('Some Thing... ');
    const searchFunc = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div>
            <h1 className="text-center text-capitalize text-primary m-3">Get Data From Api In React</h1>
            <input type="search" placeholder="Search" className="form-control w-50 mx-auto my-3" onChange={searchFunc} />
            <h4 className="text-center" >Search: {search}</h4>
            <div className="w-75 mx-auto">
                <Table striped bordered hover>
                    <thead style={{ whiteSpace: 'nowrap' }}>
                        <tr className="text-center">
                            <th>Id</th>
                            <th className="title">Title</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {displayUsers}
                    </tbody>
                </Table>
            </div>

            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />

        </div>
    )
}

export default ApiFecth
