import React from 'react';
import Default from '../components/Layout/Default';
import FianlSectionPart from '../components/FinalPart/FinalSectionPart'
import Test from '../components/Images/image1.jpg'
import TestSec from '../components/Images/image2.jpg'

const Menu = () =>{
  return(
    <Default>
      <FianlSectionPart
        addressFirst={'/about'} 
        addressSec={'/shopinfo'}
        imgSrcFirst={Test} 
        imgSrcSec={TestSec} 
        titleFirst={'About'}
        titleSec={'Shop Info'}
      ></FianlSectionPart>
    </Default>
  )
}

export default Menu