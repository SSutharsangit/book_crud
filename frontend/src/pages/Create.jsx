import React, { useState } from 'react';
import "./Home.css";
import {Link, useNavigate}from "react-router-dom";
import axios from 'axios';
import Loading from './Loading';
const Create = () => {
  const navigate=useNavigate();
  const [loading,setloading]=useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
  // const { title, author, publisyear } = formData;
    // console.log(formData);
    setloading(true);
        axios.post("http://localhost:5000/admin/signup",formData)
        .then(()=>{
          console.log("creted succfully");
          setloading(false);
        navigate("/");
        })
        .catch((err)=>{
          setloading(false);
          console.log(err);
        })
  };
  return (
    <div>
      {loading ?(<Loading/>):(
          <div className="div container border border-primary mt20 px-5">
          <div className="topform row d-flex align-items-center">
          <div className="title h1 mt20 text-primary col-10">Creation Book Form</div>
          <div className="button col-2 mt20">
            
            <Link to={"/"}>
            <button type="button" class="btn btn-primary">Go Homepage</button>
            </Link>
       
          </div>
         
          </div>
          
          <hr />
       <form className="g-3 rounded mt20" novalidate onSubmit={handleSubmit}>
          <div >
            <label htmlFor="validationCustom01" className="form-label">
              Title
            </label>
            <input
              type="text"
              name='title'
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
              onChange={handleChange}
              className="form-control"
              id="validationCustom01"
              required
            />
          </div>
          
          <div class="col-12 mt20 mb20 d-flex justify-content-center mt-4 mb-4">
      
      <button class="btn btn-primary text-center" type="submit">Create New Book</button>
      </div>
      
        </form>
      </div>)}
          
    </div>
    )}
    
  

export default Create;
