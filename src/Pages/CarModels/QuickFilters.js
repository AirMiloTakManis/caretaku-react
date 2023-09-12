import React from 'react'
import { Checkbox, Chip } from '@mui/material'
import { Diamond, LocalGasStation, FamilyRestroom, Whatshot} from '@mui/icons-material';

export default function QuickFilters(h) {
  const FilterIcons = (tag) => {
    if (tag === 'Luxury Cars') return <Diamond style={{ fontSize: 20, marginInline: 5 }}/>;
    if (tag === 'Family Cars') return <FamilyRestroom style={{ fontSize: 20, marginInline: 5 }}/>;
    if (tag === 'City Driving') return <LocalGasStation style={{ fontSize: 20, marginInline: 5 }} />;
    if (tag === 'Popular Cars') return <Whatshot style={{ fontSize: 20, marginInline: 5 }} />;
  }
  return (
    <>
    {h.tags?.map(tag => (
        <Checkbox
          key={tag.id}
          className={`quick-filters`}
          id="tags"
          onClick={e => {
            h.setTagsFilter(prev => (e.target.checked
              ? e.target.value === '' ? [''] : [...prev, e.target.value].filter(tg => tg !== '')
              : prev.filter(eTags => eTags !== e.target.value)));
          }}
          value={tag.label === 'All' ? '' : tag.label}
          checked={tag.label === 'All' ? (h.tagsFilter.includes('') || h.tagsFilter.length === 0) : h.tagsFilter.includes(tag.label)}
          icon={(
            <Chip
              label={
              <div className='d-flex align-items-center'>
                {FilterIcons(tag.label)}
                {tag.label}
              </div>}
              style={{
                backgroundColor: 'var(--secondary-color)', 
                color: 'var(--main-color)',
                width: '100%', 
                height: '100%',
                boxShadow: '0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)'
              }}
            />
          )}
          checkedIcon={(
            <Chip
              label={
                <div className='d-flex align-items-center'>
                  {FilterIcons(tag.label)}
                  {tag.label}
                </div>}
              style={{
                backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)', width: '100%', height: '100%',
                boxShadow: '0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)'
              }}
            />
          )}
        />
      ))}
    </>
  )
}
