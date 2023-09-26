import React from 'react'
import { Grid } from '@mui/material';
import CustomRadio from './CustomRadio';
import useHook from './hook'

export default function InputsFIlter({ staticData }) {
  const h = useHook(staticData)
  const buttonClass = !!h.customClass ? 'button-loading' : 'button'
  return (
    <Grid item container xs={12} md={12} className="radio-container">
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Car Condition" options={[{ name: 'All', value: 0 }, ...h.conditions]} value={h.condition} setValue={h.setCondition} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Body Type" options={[{ name: 'All', value: 0 }, ...h.bodyTypes]} value={h.bodyType} setValue={h.setBodyType} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Transmission Type" options={[{ name: 'All', value: 0 }, ...h.transmissionTypes]} value={h.transmissionType} setValue={h.setTransmissionType}/>
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Engine Type" options={[{ name: 'All', value: 0 }, ...h.engineTypes]} value={h.engineType} setValue={h.setEngineType} />
      </Grid>
      <Grid item container xs={12} style={{ marginBottom: 5 }}>
        <CustomRadio title="Car Origin" options={[{ name: 'All', value: 0 }, ...h.origins]} value={h.origin} setValue={h.setOrigin} />
      </Grid>
      <Grid item xs={12}>
        {/* <Link to={`/car?condition=${condition}`}> */}
          <button className={buttonClass} onClick={h.handleSubmit}>
            <div className='text-icon'>
              {!!h.customClass ? 'PROCESSING...' : 'SHOW ME!' }
            </div>
          </button>
        {/* </Link> */}
      </Grid>
      <Grid item xs={10}>
        <div className="pt-2 d-flex justify-content-center" style={{ color: 'red', fontSize: 12, fontWeight: 700 }}>
        </div>
      </Grid>
    </Grid>
  )
}
