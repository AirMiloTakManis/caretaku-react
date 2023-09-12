import React from 'react';
import CarImagePlaceholder from '../../Assets/Images/Car_Covers_Apollo_2.png';
import { numberWithCommas } from '../../Helpers';
import { Button } from '@mui/material';

export default function CarCard({ brand = '', models = {} }) {
  const { modelCode = '', priceInfo = {} } = models;
  const { minPrice = 0, maxPrice = 0 } = priceInfo;
  return (
    <div
      className="cars-card" style={{ backgroundColor: 'white' }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'var(--dark-color)',
            height: '12%',
            marginBottom: 20,
            borderTopLeftRadius: 10,
            padding: 10,
            borderTopRightRadius: 10,
          }}
        >
          <p style={{ textAlign: 'center', margin: 'auto' }}>{brand}</p>
        </div>
        <img src={CarImagePlaceholder} alt={models.modelCode} style={{ width: '80%' }} />
      </div>
      <div style={{ paddingLeft: 15, marginTop: 20 }}>
        <p>{modelCode}</p>
      </div>
      <div style={{ paddingLeft: 15 }}>
        <p style={{ fontWeight: 600 }}>
          RM {numberWithCommas(minPrice)} - RM{' '}
          {numberWithCommas(maxPrice)}
        </p>
      </div>
      <div style={{ padding: 15 }}>
        <Button style={{ outline: '2px solid var(--primary-color)', color: 'var(--secondary-color)' }} fullWidth>
          View Car
        </Button>
      </div>
    </div>
  );
}
