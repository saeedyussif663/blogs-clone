import {Routes, Route} from 'react-router-dom'

import NavBar from './Components/NavBar';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SingleBlog from './Components/SingleBlog';

import './index.css';

function App() {
  return (
    <div className="container">
      <NavBar />
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
