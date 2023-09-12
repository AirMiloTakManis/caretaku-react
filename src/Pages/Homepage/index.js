import React from 'react'
import { Container, Grid } from '@mui/material';
import InputsFilter from './InputFilter';

export default function Homepage() {
  return (
    <Grid container style={{ height: '100vh', width: '100vw' }}>
        <Grid item container xs={12} md={12}>
          <Grid item xs={12} md={6}>
            <div style={{ padding: '20% 5vw 23vh 18vw', position: 'relative', zIndex: 99 }}>
                <h2 style={{ fontSize: 90, color: 'var(--dark-color)', filter: 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.4))' }}>Find</h2>
              <h2 style={{ fontSize: 90, color: 'var(--dark-color)', marginTop: -10,  filter: 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.4))'}}>Your Next Car</h2>
              <h3 style={{ fontSize: 20, filter: 'drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25))' }}>Find the right type, shape and price</h3>
              {/* <div style={{ borderRadius: '50%', backgroundColor: 'var(--primary-color)', width: 80, height: 80,  bottom: '50vh', left: '140px' }}  /> */}
            </div>
            <div style={{ position: 'absolute', borderRadius: 20, backgroundColor: 'var(--primary-color)', boxShadow: '0 0 10px 0 rgba(0,0,0,0.45) inset',  width: '30%', height: '40%', top: '35%', left: '20%', zIndex: 1}}/>
          </Grid>
          <Grid item xs={12} md={6} className="input-filter-container">
            <InputsFilter />
          </Grid>
        </Grid>
      </Grid>
  )
}
