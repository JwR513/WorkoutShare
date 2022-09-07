
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/home';
import { Nav } from './components/nav';
import{ Profile } from './pages/profilepage'
import { useState } from 'react';
import { MySplits } from './pages/mysplits'

const App:React.FunctionComponent =() => {


const [clicked, setClicked]= useState(false)
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
    <div className="App">
      {clicked ? <Nav /> : obtn }
      {clicked ?  obtn :<p></p> }
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile logStatus={logStatus} setLogStatus={setLogStatus}/>}/>
        <Route path='/mysplits' element={<MySplits />}/>
      </Routes>
    </div>
  );
}

export default App;
