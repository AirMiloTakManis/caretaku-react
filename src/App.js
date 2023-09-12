import './App.css';
import { Routes, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar.js';
import { Grid } from '@mui/material';
import Homepage from './Pages/Homepage';
import CarModels from './Pages/CarModels';
import Dealerships from './Pages/Dealerships'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainContainer child={<Homepage />}/>}/>
      <Route path='/home' element={<MainContainer child={<Homepage />}/>}/>
      <Route path='/car-models' element={<MainContainer child={<CarModels />}/>}/>
      <Route path='/dealerships' element={<MainContainer child={<Dealerships />}/>}/>
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
