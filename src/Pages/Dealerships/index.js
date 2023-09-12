/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Map from './Map';
import { Button } from '@mui/material';
import useHook from './hook'

export default () => {
  const h = useHook();
  console.log("🚀 ~ file: index.js:9 ~ h:", h)
  const [onHover, setOnHover] = useState(false);

  return (
    <>
      {!!h.dealers.length
        ? <RemoveDealershipButton
        onhover={onHover}
        setonhover={setOnHover}
        setshowdealers={h.setShowDealers}
        showdealers={h.showDealers}
        dealers={h.dealers}
        getdealers={h.getDealers}
        removedealers={h.removeDealers}
      />
        : <FindDealershipButton
        onhover={onHover}
        setonhover={setOnHover}
        setshowdealers={h.setShowDealers}
        showdealers={h.showDealers}
        dealers={h.dealers}
        getdealers={h.getDealers}
        removedealers={h.removeDealers}
      />
      }
      <Map {...h} />
    </>
  );
};

const FindDealershipButton = ({ removedealers, setonhover, setshowdealers, showdealers, dealers, getdealers }) =>
      <button
        onClick={() => {
          setshowdealers(true); getdealers()
        }}
        className='find-dealership-button'
      >
        {showdealers ? 'Finding Nearby Dealerships . . .' : 'Find Nearby Dealerships' }
      </button>

const RemoveDealershipButton = ({ removedealers, setonhover, setshowdealers, showdealers, dealers, getdealers }) =>
      <button
        onClick={() => {
          removedealers(); setshowdealers(false);
        }}
        className='remove-dealership-button'
      >
        Clear Map
      </button>
  

