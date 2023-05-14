import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
  }, [])

  return (
    <div>DetailsPage</div>
  )
}

export default DetailsPage