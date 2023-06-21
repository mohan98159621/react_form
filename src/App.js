import React from 'react'
import 'antd/dist/reset.css';
import Contact from './component/Contact';
import Login from './component/Login';

import {Routes,Route} from 'react-router-dom'


import './App.css';
import Forgot from './component/Forgot';

function App() {
  return (
    <>
<Routes>
<Route path='/'  element={< Login />}    ></Route>
<Route path='/login'  element={< Contact />}    ></Route>
<Route path='/forgot'  element={< Forgot />}    ></Route>



</Routes>



        

    </>
  );
}

export default App;
