import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Delete = () => {
  const [book,setbook]=useState({});
  const [loading,setloading]=useState(false);
  const {id}=useParams();
  const navigate= useNavigate();
  useEffect(() => {
    setloading(true);
    axios
      .get(`http://localhost:5000/book/books/${id}`)
      .then((response) => {
        setbook(response.data[0]);
        setloading(false);
      })
      .catch((error) => {
        alert(error);
        setloading(false);
      });
  }, [id]);
  const handledelete=()=>{
    axios
    .delete(`http://localhost:5000/book/books/${id}`)
    .then((response) => {
      setloading(false);
      navigate("/");
    })
    .catch((error) => {
      alert(error);
      setloading(false);
    });

  };
  return (
    <div>
    {loading ? (
      <Loading/>
    ) : (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div className="card text-center mb-3" style={{ width: '30rem' }}>
          <div className="card-body">
            <h5 className="card-title">Are you want to delete book?</h5>
            <p className="card-text">{book.title}</p>
            <Link to={"/"}>
            <button className="btn btn-danger" style={{marginRight:'30px'}} onClick={handledelete} >
             yes,sure..
            </button>
            </Link>
            <Link to={"/"}>
            <button className="btn btn-success" >
             No
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Delete