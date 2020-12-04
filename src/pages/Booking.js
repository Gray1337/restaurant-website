import React, { useState } from 'react';
import { DatePicker, TimePicker, Select, Space } from 'antd';
import styled from 'styled-components'
import Landscape from '../components/Common/Landscape';
import Default from '../components/Layout/Default';
import Container from '../components/Common/Container'
import bgImage from '../components/Images/restaurantbg.jpg'
import FinalSectionPart from '../components/FinalPart/FinalSectionPart';
import ShopLinkImg from '../components/Images/image9.jpg'
import MenuLinkImg from '../components/Images/image5.jpg'

const FormOutter = styled.form`
  margin: 100px auto 0;
  display: flex;
  flex-flow:column nowrap;
  width: 80%;
  position:relative;
  @media (min-width:681px){
    margin-top: 160px;
    flex-flow:row wrap;
  }
`;
const FormItem = styled.div`
  width:100%;
  display:flex;
  flex-flow:column nowrap;
  margin-bottom:48px;
  @media (min-width:681px){
    flex-flow:row nowrap;
  }
`
const FormTitle = styled.div`
  width:100%;
  font-size: 18px;
  line-height: 1;
  margin-bottom: 12px;
  letter-spacing: 0.08rem;
  font-weight:bold;
  @media (min-width:681px){
    width:30%;
    text-align:center;
    align-self:center;
    margin-bottom: 0px;
    border-left:20px solid rgb(172, 123, 11);
  }
`;
const InputInfo = styled.input`
  width:100%;
  padding:12px 16px;
  border:0;
  border-radius:8px;
  box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
  outline:none;
  @media (min-width:681px){
    width:70%;
  }
`
const BtnGroup = styled.div`
  display:flex;
  flex-flow:row nowrap;
  width:100%;
  justify-content:space-around;
  @media (min-width:1365px){
    justify-content:flex-end;
  }
`
const SubmitBtn =styled.input`
  width:30%;
  color:white;
  font-size:18px;
  padding:12px 8px;
  background-color:#000;
  border-radius:8px;
  outline:none;
  border:0;
  @media (min-width:681px){
    max-width:160px;
  }
  @media (min-width:1365px){
    margin-right:34px;
    &:last-child{
      margin-right:0px;
    }
  }
`
const DateOutter = styled.div`
  width:100%;
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  @media (min-width:681px){
    width:70%;
  }
`
const Title = styled.div`
  font-size: 32px;
  width:100%;
  margin-bottom: 48px;
  line-height: 1.7;
  letter-spacing: 0.08rem;
  border-bottom:1px solid rgb(190,190,190);
`;

const Booking = () =>{
  return(
    <Default>
      <Landscape 
      landscapeImg={bgImage} 
      title={'Booking'}
      ></Landscape>
      <Container>
        <FormOutter>
          <Title>Booking</Title>
          <FormItem>
            <FormTitle>Name</FormTitle>
            <InputInfo type="text" placeholder='Name'/>
          </FormItem>
          <FormItem>
            <FormTitle>Member</FormTitle>
            <InputInfo type="number" placeholder='People'/>
          </FormItem>
          <FormItem>
            <FormTitle>Phone</FormTitle>
            <InputInfo type="text" placeholder='0800-XXX-XXX'/>
          </FormItem>
          <FormItem>
            <FormTitle>Date</FormTitle>
            <DateOutter>
              <DatePicker style={{width:'48%',padding:'12px 16px', boxShadow:' 4px 4px 8px rgba(0,0,0,0.2)', borderRadius:'8px'}} placeholder='Date'/>
              <TimePicker style={{width:'48%',padding:'12px 16px', boxShadow:' 4px 4px 8px rgba(0,0,0,0.2)', borderRadius:'8px'}} placeholder='Time' showTime={{ format:('HH:mm') }}/>
            </DateOutter>
          </FormItem>
          <BtnGroup>
            <SubmitBtn type='submit' value='Confirm' />
            <SubmitBtn type='reset' value='Reset' />
          </BtnGroup>
        </FormOutter>
        <FinalSectionPart
          addressFirst={'/menu'} 
          addressSec={'/shopinfo'}
          imgSrcFirst={MenuLinkImg} 
          imgSrcSec={ShopLinkImg} 
          titleFirst={'About'}
          titleSec={'Menu'}
        />
      </Container>
    </Default>
  )
}

export default Booking