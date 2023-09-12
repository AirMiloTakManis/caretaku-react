import React from 'react'
import { Button, Grid } from '@mui/material';
import CustomRadio from './CustomRadio';


export default function InputsFIlter() {
  return (
    <Grid item container xs={12} md={12} className="radio-container">
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Car Condition" options={['All','New', 'Used']} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Body Type" options={['All', 'Sedan', 'Hatchback', 'SUV', 'MPV', 'Coupe', 'Truck', 'Wagon', 'Convertible', 'Van']} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Transmission Type" options={['All', 'Automatic', 'Manual']} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Engine Type" options={['All', 'Petrol', 'Diesel', 'Hybrid', 'Electric']} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Car Origin" options={['All', 'Local', 'Japanese', 'Continental', 'Korean']} />
      </Grid>
      <Grid item xs={12}>
        <Button className="show-me-button">
          SHOW ME!
        </Button>
      </Grid>
      <Grid item xs={10}>
        <div className="pt-2 d-flex justify-content-center" style={{ color: 'red', fontSize: 12, fontWeight: 700 }}>
        </div>
      </Grid>
    </Grid>
  )
}
