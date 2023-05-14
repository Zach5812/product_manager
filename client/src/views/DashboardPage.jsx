import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const [prodList, setProdList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => {
                setProdList(response.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div>
            <h1>All Products:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prodList.map((eachProd, idx)=>(
                            <tr key={idx}>
                                <td><Link to={`/products/${eachProd._id}`}>
                                    {eachProd.title}</Link></td>
                                <td>${eachProd.price}</td>
                                <td>{eachProd.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DashboardPage;