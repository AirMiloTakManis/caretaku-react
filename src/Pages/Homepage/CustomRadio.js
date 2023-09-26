import React from 'react'
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Chip } from '@mui/material'

export default function CustomRadio({ title, options, value, setValue }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"><p style={{ color: 'var(--dark-color)', fontSize: 18, margin: 'auto' }}>{title}</p></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={options[0].value}
        onChange={e => setValue(e.target.value)}
        value={value}
        name="radio-buttons-group"
        row
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={
              <Radio
                icon={<Chip label={option.name} className='custom-radio-input' />}
                checkedIcon={<Chip label={option.name} className='custom-radio-input-checked' />}
              />}
          />
        ))}
      </RadioGroup> 
    </FormControl>
  )
}
