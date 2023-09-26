import './App.css';
import { Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar.js';
import { Grid } from '@mui/material';
import Homepage from './Pages/Homepage';
import CarModels from './Pages/CarModels';
import Dealerships from './Pages/Dealerships';
import ProgressPage from './Pages/Progress'
import useHook from './hook';

function App() {
  const h = useHook();
  return (
    <Routes>
      <Route path='/' element={<MainContainer child={<Homepage {...h} />}/>}/>
      <Route path='/home' element={<MainContainer child={<Homepage {...h} />}/>}/>
      <Route path='/car-models' element={<MainContainer child={<CarModels {...h} />}/>}/>
      <Route path='/dealerships' element={<MainContainer child={<Dealerships {...h} />}/>}/>
      <Route path='in-progress' element={<MainContainer child={<ProgressPage {...h}/>} />} />
    </Routes>
  );
}

function MainContainer(props){
  return (
    <Grid className="content"
      style={{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        overflow: 'auto',
      }}
    >
      <MenuBar />
      <Grid item xs={12}>
        {props.child}
      </Grid>
    </Grid>
  )
}

export default App;
