
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import ServiceDetail from './Component/ServiceDetails/ServiceDetail';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import RequiareAuth from './Component/Login/RequiareAuth/RequiareAuth';
import CheckOut from './Component/CheckOut/CheckOut';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/home/service/:id' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequiareAuth>
            <CheckOut></CheckOut>
          </RequiareAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
