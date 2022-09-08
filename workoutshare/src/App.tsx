import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/home';
import { Nav } from './components/nav';
import{ Profile } from './pages/profilepage'
import { useState } from 'react';
import { MySplits } from './pages/mysplits'
import { RegisterPage } from './pages/register';

const App:React.FunctionComponent =() => {


const [clicked, setClicked]= useState(true)
const [logStatus, setLogStatus] =useState(false)

const navHandleClick =()=>{
  if(clicked){
    setClicked(false)
  }else{
    setClicked(true)
  }
}
const obtn = <button onClick={navHandleClick} id='nav-btn'>onclick</button>


  return (
    <div>
      {clicked ? <Nav /> : obtn }
      {clicked ?  obtn :<p></p> }
      <div className="App">
        <Routes>
          <Route path='/' element={<Home logStatus={logStatus} setLogStatus={setLogStatus} />}/>
          <Route path='/profile' element={<Profile logStatus={logStatus} setLogStatus={setLogStatus}/>}/>
          <Route path='/mysplits' element={<MySplits />}/>
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </div>
    
  
  );
}

export default App;
