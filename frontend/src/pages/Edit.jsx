import React, { useEffect, useState } from 'react';
import "./Home.css";
import {Link, useNavigate, useParams}from "react-router-dom";
import axios from 'axios';
import Loading from './Loading';
const Edit= () => {
  const navigate=useNavigate();
  const {id} =useParams();
  const [loading,setloading] =useState({})
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publishear: 0
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleEdit = (e) => {
    e.preventDefault();
        axios.put(`http://localhost:5000/book/books/${id}`,formData)
        .then(()=>{
          console.log("edit succfully");
          navigate("/")
        })
        .catch((err)=>{
          console.log(err);
        })
  };
  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5000/book/books/${id}`)
      .then((response) => {
        setFormData(response.data[0]);
        setloading(false);
      })
      .catch((error) => {
        alert(error);
        setloading(false);
      });
  }, [id]);
  return (
    <div>
      {loading?(<Loading/>):(<div className="div container border border-primary mt20 px-5">
        <div className="topform row d-flex align-items-center">
        <div className="title h1 mt20 text-primary col-10">Edit Book </div>
        <div className="button col-2 mt20">
          
          <Link to={"/"}>
          <button type="button" class="btn btn-primary">Go Homepage</button>
          </Link>
     
        </div>
       
        </div>
        
        <hr />
     <form className="g-3 rounded mt20" novalidate onSubmit={handleEdit}>
        <div >
          <label htmlFor="validationCustom01" className="form-label">
            Title
          </label>
          <input
            type="text"
            name='title'
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            id="validationCustom01"
            required
          />
        </div>
        <div >
          <label htmlFor="validationCustom01" className="form-label">
            Author
          </label>
          <input
            type="text"
            name='author'
            value={formData.author}
            onChange={handleChange}
            className="form-control"
            id="validationCustom01"
            required
          />
        </div>
        <div >
          <label htmlFor="validationCustom01" className="form-label">
            PublishYear
          </label>
          <input
            type="number"
            name='publishyear'
            value={formData.publishyear}
            onChange={handleChange}
            className="form-control"
            id="validationCustom01"
            required
          />
        </div>
        
        <div class="col-12 mt20 mb20 d-flex justify-content-center mt-4 mb-4">

    <button class="btn btn-primary text-center" type="submit">Edit Book</button>
  </div>

      </form>
    </div>)}
    </div>
    
  );
};

export default Edit;
