import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import NavBar from './Components/NavBar';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SingleBlog from './Components/SingleBlog';
import Loader from './Components/Loader'

import './index.css';
import { useGlobalContext } from './context';

function App() {
 const {isLoading} = useGlobalContext()

  return (
    <div className="container">
      <NavBar />
      <div className='content'>
        {isLoading ? <Loader /> : 
        <Routes>
          <Route   path='/' element={<Home />}/>
          <Route path='/blog/:id'  element={<SingleBlog/>} />
          <Route  path='/addnew' element={<Form title="POST"/>} />
            </Routes>
        }
        </div>
        <Footer />
      </div>
  );
}

export default App;
