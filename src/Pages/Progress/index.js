import React from 'react'
import placeholderv2 from '../../Assets/Images/placeholder404.png'
import QR from '../../Assets/Images/IMG_7670.jpg'
import { useLocation } from 'react-router-dom';

export default function index({ staticData }) {
  console.log("🚀 ~ file: index.js:6 ~ index ~ staticData:", staticData)
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const condtion = !!Number(urlParams.get('condition')) ? staticData.carCondition.find(d => d.value === Number(urlParams.get('condition')))?.name : 'All';
  const bodyType = !!Number(urlParams.get('bodyType')) ? staticData.bodyType.find(d => d.value === Number(urlParams.get('bodyType')))?.name : 'All';
  const tranmissionType = !!Number(urlParams.get('tranmissionType')) ? staticData.bodyType.find(d => d.value === Number(urlParams.get('tranmissionType')))?.name : 'All';
  const engineType = !!Number(urlParams.get('engineType')) ? staticData.bodyType.find(d => d.value === Number(urlParams.get('engineType')))?.name : 'All';
  const origin = !!Number(urlParams.get('origin')) ? staticData.bodyType.find(d => d.value === Number(urlParams.get('origin')))?.name : 'All';
  
  return (
    <div className='p-2'>
    <div className='d-flex justify-content-center'>
      <img src={placeholderv2} style={{ height: '40vh' }} alt="404" />
    </div>
    <div className='d-flex flex-column'>
      <h3 className='text-center'>Welp, looks like I'm not done with this page yet, but here is the data that you have chosen from the previous page:</h3>
      <div className='d-flex flex-column mx-auto mt-3' style={{ width: 300, fontSize: 16 }}>
        <p>Car Condition: {condtion}</p>
        <p>Car Body Type: {bodyType}</p>
        <p>Car Transmission: {tranmissionType}</p>
        <p>Car Engine Type: {engineType}</p>
        <p>Car Origin: {origin}</p>
      </div>
    </div>
    <div className='d-flex flex-column mx-auto'>
      <h3 className='text-center'>Or if you are feeling extra generous today you can tip me below 🤧</h3>
      <img src={QR} alt="qr" style={{  width: '10vw', marginInline: 'auto' }} />
    </div>
    </div>
    

  )
}
