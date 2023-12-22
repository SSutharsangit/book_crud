import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';

const Show = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/book/books/${id}`)
      .then((response) => {
        setBook(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loading/>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="card text-center mb-3" style={{ width: '30rem' }}>
            <div className="card-body">
              <h5 className="card-title">{book.title} Book Details...</h5>
              <p className="card-text">Id: {book._id}</p>
              <p className="card-text">Author: {book.author}</p>
              <p className="card-text">Publishyear: {book.publishyear}</p>
              <p className="card-text">CreatedAt: {book.createdAt}</p>
              <p className="card-text">UpdatedAt: {book.updatedAt}</p>
              <Link to={"/"}>
              <button className="btn btn-primary" >
               Go Homepage
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
