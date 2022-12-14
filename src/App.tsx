import './App.css';
import { Routes, Route, Router } from 'react-router-dom'
import { Home } from './pages/home';
import { Nav } from './components/nav';
import{ Profile } from './pages/profilepage'
import { useState } from 'react';
import { RegisterPage } from './pages/register';
import { SplitDetail } from './components/splitDetail';
import { CreateSplitPage } from './components/splitcreate';
import { PersonalSplits } from './pages/personalsplits';
import { MuscleDetail } from './components/muscleDetail';
import { Server } from './components/globals';
import  axios from 'axios';


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
const [ splitState, setSplitState] = useState(iniSplitState)
const [muscles, setMuscles] = useState([])
const [userInfo, setUserInfo] =useState()
const [muscleDetail , setMuscleDetail ]= useState()
const [deleted,setDeleted]= useState(false)
const [splits, setSplits]= useState([])

const GetSplits = async () => {
  const res = await axios.get(`${Server}/api/split/`)
  setSplits(res.data)
}

const navHandleClick =()=>{
  if(clicked){
    setClicked(false)
  }else{
    setClicked(true)
  }
}
const obtn = <button onClick={navHandleClick} id='nav-btn'>{clicked ? <p>Hide</p> : <p>Show</p>}</button>

const terALT =()=>{
  if(clicked){
    return obtn
  }
}
  return (
    <div>
      {clicked ? <Nav  logStatus={logStatus} setLogStatus={setLogStatus}/> : obtn }
      {terALT()}
      <div className="App">
        <Routes>
          <Route path='/' element={<Home logStatus={logStatus} setLogStatus={setLogStatus} setSplitState={setSplitState}  setMuscles={setMuscles} deleted={deleted} setDeleted={setDeleted} GetSplits={GetSplits} splits={splits} />}/>
          <Route path='/profile' element={<Profile userInfo={userInfo} setUserInfo={setUserInfo} logStatus={logStatus} />}/>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/splits/:splitId' element={<SplitDetail splitState={splitState} muscles={muscles}  setMuscleDetail={setMuscleDetail} setDeleted={setDeleted} GetSplits={GetSplits}/>}/>
          <Route path='/splitCreate' element={
          <CreateSplitPage  />}/>
          <Route path='/mysplits' element={<PersonalSplits logStatus={logStatus} />}/>
          <Route path='/muscleDetail/:muscleId' element={<MuscleDetail muscleDetail={muscleDetail} splitState={splitState}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
