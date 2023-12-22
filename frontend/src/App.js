
import './App.css';
import Spinner from './componets/Spinner';
import Create from './pages/Create';
import Home from './pages/Home';
import Delete from './pages/Delete';
import Edit from './pages/Edit';
import Show from './pages/Show';

import {Route,Routes} from "react-router-dom";

function App() {
  return (
     <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/book/create' element={<Create/>}></Route>
        <Route path='/book/details/:id' element={<Show/>}></Route>
        <Route path='/book/delete/:id' element={<Delete/>}></Route>
        <Route path='/book/edit/:id' element={<Edit/>}></Route>
      </Routes>
  
     </div>
  );
}

export default App;
