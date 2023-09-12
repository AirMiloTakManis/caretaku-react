import React from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Chip } from '@mui/material'

export default function CustomRadio({ title, options }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"><p style={{ color: 'var(--dark-color)', fontSize: 18, margin: 'auto' }}>{title}</p></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0]}
        name="radio-buttons-group"
        row
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={
              <Radio
                icon={<Chip label={option} className='custom-radio-input' />}
                checkedIcon={<Chip label={option} className='custom-radio-input-checked' />}
              />}
          />
        ))}
      </RadioGroup> 
    </FormControl>
  )
}
