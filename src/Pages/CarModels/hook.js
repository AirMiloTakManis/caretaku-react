import React, { useState } from 'react'

export default function Hook() {
  const [tags, setTags] = useState([
    {
      id: 0,
      label: 'All' 
    },
    {
      id: 1,
      label: 'Popular Cars' 
    },
    {
      id: 2,
      label: 'City Driving' 
    },
    {
      id: 3,
      label: 'Family Cars' 
    },
    {
      id: 4,
      label: 'Luxury Cars' 
    }
]);
  const [tagsFilter, setTagsFilter] = useState(['']);


  return {
    tags,
    setTags,
    tagsFilter,
    setTagsFilter,
  }
}
