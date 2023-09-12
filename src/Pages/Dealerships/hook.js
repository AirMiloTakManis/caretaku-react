import { useState } from 'react'

export default function Hook() {
  const [dealers, setDealers] = useState([])
  const [showDealers, setShowDealers] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const getDealers = () => {
      setDealers([
        {
          id: 1,
          geocode: [3.119584929441376, 101.6727521484622],
          name: 'MotorTrader'
        },
        {
          id: 2,
          geocode: [3.1204402679586343, 101.64674206274672],
          name: 'Beemer',
        },
        {
          id: 3,
          geocode: [3.1221543351713583, 101.70991344650567],
          name: '7 Auto',
        }
      ])
  }

const removeDealers = () => {
  setDealers([]);
}
  return {
    dealers,
    showDealers,
    setShowDealers,
    showAnimation,
    setShowAnimation,
    getDealers,
    removeDealers,
  }
}
