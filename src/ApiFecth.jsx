import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function ApiFecth() {
    const [users, setUsers] = useState([]);
    const showMyCardData = async () => {
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        setUsers(await responce.json());
        console.log(users);
    }

    useEffect(() => {
        showMyCardData();
    }, []);
    return (
        <div>
            <h1 className="text-center text-capitalize text-primary m-3">Hello World</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Form No</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => {
                            return (
                                <tr>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </Table>
        </div>
    )
}

export default ApiFecth
