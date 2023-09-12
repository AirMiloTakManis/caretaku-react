/* eslint-disable max-len */
import React, { useState } from 'react';
import Map from './Map';
import useHook from './hook'

export default function Dealerships(){
  const h = useHook();
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
  

