import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/home';
import { Nav } from './components/nav';
import{ Profile } from './pages/profilepage'
import { useEffect, useState } from 'react';
import { MySplits } from './pages/mysplits'
import { RegisterPage } from './pages/register';
import { SplitDetail } from './components/splitDetail';
import { useNavigate } from "react-router-dom"

const App:React.FunctionComponent =() => {
  
const iniSplitState = {
  id: 0,
  name: '',
  owner:'',
  splitarea: [],
  users: [],
}

const [clicked, setClicked]= useState(true)
const [logStatus, setLogStatus] =useState(false)
const [username,setUsername]=useState('')
const[ splitState, setSplitState] = useState(iniSplitState)


const navHandleClick =()=>{
  if(clicked){
    setClicked(false)
  }else{
    setClicked(true)
  }
}
const obtn = <button onClick={navHandleClick} id='nav-btn'>onclick</button>

const terALT =()=>{
  if(clicked){
    return obtn
  }
}
useEffect(()=>{
  console.log(splitState)
},[splitState])


  return (
    <div>
      {clicked ? <Nav setUsername={setUsername} logStatus={logStatus}/> : obtn }
      {terALT()}
      <div className="App">
        <Routes>
          <Route path='/' element={<Home setUsername={setUsername} logStatus={logStatus} setLogStatus={setLogStatus} setSplitState={setSplitState} splitState={splitState} />}/>
          <Route path='/profile' element={<Profile username={username} logStatus={logStatus} setLogStatus={setLogStatus}/>}/>
          <Route path='/mysplits' element={<MySplits />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/splits/:splitId' element={<SplitDetail splitState={splitState}  />}/>
        </Routes>
      </div>
    </div>
    
  
  );
}

export default App;
