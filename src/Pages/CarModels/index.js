import React, { useRef } from 'react';
import AllModels from './AllModels.json';
import ProtonDummy from './CarBrands/ProtonDummy.json'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import SearchBox from '../../Components/Searchbox';
import useHook from './hook'
import QuickFilters from './QuickFilters.js'
import CarsCard from './CarsCard';

export default function CarModels() {
  const h = useHook();
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    if (ref.current) {
      const container = ref.current;
      const scrollPosition = container.scrollLeft + scrollOffset;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: '100%', borderRadius: '10px', height: '100%', padding: 10 }}>
        <div className='searchbox-container'>
          <SearchBox />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: '100%'}}>
          {/* <IconButton
            disableRipple
            style={{ width: 40, height: 40, backgroundColor: 'var(--secondary-color)' }}
            onClick={() => scroll(-80)}
          >
          </IconButton> */}
          <div className="filter-chevron-left" style={{ width: '5%', paddingLeft: 10 }} onClick={() => scroll(-80)}>
            <ChevronLeft className="filter-left-button" style={{ color: 'var(--dark-color)', fontSize: 50 }} />
          </div>
          <div
            ref={ref}
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflowX: 'hidden',
              width: '100%',
              padding: 10,
            }}
          >
            {AllModels.map((car, index) => (
              <div key={index}>
                <div className='car-brands-filter-container'>
                  <img src={`/images/${car.brandCode}.png`} width={70} alt='car-brand-logo' />
                </div>
                <p style={{ textAlign: 'center', fontSize: 14 }}>{car.brandName}</p>
              </div>
            ))}
          </div>
          <div className="filter-chevron-right" style={{ width: '5%', paddingRight: 10 }} onClick={() => scroll(80)}>
          <ChevronRight className='filter-right-button' style={{ color: 'var(--dark-color)', fontSize: 50 }} />
        </div>
        </div>
      </div>
      <hr></hr>

      <div>
        <div className="quick-filter-container">
          <QuickFilters {...h} />
        </div>
        <div>
          {/* Cars goes 🙉 */}
          <div className='scroll-container d-flex align-items-center flex-wrap justify-content-center' style={{ maxHeight: '80vh', overflow: 'auto'}}>
            {ProtonDummy.modelPriceList.map((cars, index) => (
            <CarsCard brand={ProtonDummy.brandName} models={cars} key={index} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
