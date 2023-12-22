import React from 'react';
import "./Home.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
const Home = () => {
  const [books,setbooks]=useState([]);
  const [loading,setloading] =useState(false);
  useEffect(()=>{
    setloading(true);
    axios
    .get("http://localhost:5000/book/books")
    .then((response)=>{
      // console.log(response.data);
      setbooks(response.data);
      setloading(false);
    })
    .catch((error)=>{
      console.log(error);
      setloading(false);
    })
  },[])

  return (
    <div className="div">
 <div className="navabarcontainer">
 <div className='container-f navbar  bg-primary '>
      <div className="navbar-brand px-5 h6 text-white col-4">Booklist</div>
      <Link to={"/book/create"}>
      <button type="button" class="btn btn-outline-light col-8">ADD NEWBOOK</button>
      </Link>
      
    </div>
 </div>
 {loading ?(<Loading/>):( <div className="content container mt20">
  <table class="table table-hover text-center">
   <thead>
     <tr>
       <th scope="col">No</th>
       <th scope="col">Title</th>
       <th scope="col">Author</th>
       <th scope="col">Publish Year</th>
       <th scope="col">Operations</th>
     </tr>
   </thead>
   <tbody>
    {books.map((book,index)=>(
 <tr key={book.id}>
 <th scope="row">{index+1}</th>
 <td>{book.title}</td>
 <td>{book.author}</td>
 <td>{book.publishyear}</td>
 <td>
  <Link to={`/book/details/${book._id}`}>
  <button type="button" class="btn btn-outline-info mx-1"><InfoOutlinedIcon/></button>
  </Link>
  <Link to={`/book/edit/${book._id}`}>
  <button type="button" class="btn btn-outline-warning mx-1"><EditOutlinedIcon/></button>
  </Link>
   <Link to={`/book/delete/${book._id}`}>
   <button type="button" class="btn btn-outline-danger mx-1"><DeleteOutlineOutlinedIcon/></button>
   </Link>
  
 </td>
</tr>
    ))}
    
   </tbody>
 </table>
 
  </div>)
 
 
 }
    </div>
    
  );
};

export default Home;