import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'

import NavBar from './Components/NavBar';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SingleBlog from './Components/SingleBlog';
import Loader from './Components/Loader'

import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="container">
      <NavBar />
      {isLoading && <Loader/>}
      <Routes>
        <Route   path='/' element={<Home />}/>
        <Route path='/blog/:id'  element={<SingleBlog/>} />
        <Route  path='/addnew' element={<Form />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
