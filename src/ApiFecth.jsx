import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

function ApiFecth() {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 5;
    const pagesVisted = pageNumber * userPerPage;
    const showMyCardData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        setUsers(await responce.json());
    }

    const pageCount = Math.ceil(users.length / userPerPage);

    const changePage = ({ select }) => {
        setPageNumber(select);
    }
    // console.log(pageNumber)


    // useEffect(() => {
    //     showMyCardData();
    // }, []);
    showMyCardData();
    const testFun = (event) => {
        alert(event.target.textContent);
    }
    return (
        <div>
            <h1 className="text-center text-capitalize text-primary m-3">Hello World</h1>
            <div className="w-75 mx-auto">
                <Table striped bordered hover>
                    <thead style={{ whiteSpace: 'nowrap' }}>
                        <tr>
                            <th>Form No</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th onClick={testFun} >Body</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            users.slice(pagesVisted, pagesVisted + userPerPage).map((item, i) => {
                                return (
                                    <tr key={i} className='align-middle'>
                                        <td className='align-middle'>{item.userId}</td>
                                        <td className='align-middle'>{item.id}</td>
                                        <td className='align-middle'>{item.title}</td>
                                        <td className='align-middle'>{item.body}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <Pagination />
            {/* <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageCount={pageCount}
                onPageChange={changePage}
            /> */}

        </div>
    )
}

export default ApiFecth
