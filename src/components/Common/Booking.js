import React, {useCallback, useState} from 'react';
import { DatePicker, TimePicker } from 'antd';
import moment from 'moment';
import styled from 'styled-components'
import Container from './Container'
import emailjs from 'emailjs-com'


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
const SubmitBtn =styled.button`
  width:50%;
  color:white;
  font-size:18px;
  font-weight:bold;
  padding:12px 8px;
  background-color:rgb(172,123,11);
  border-radius:8px;
  outline:none;
  border:0;
  position: absolute;
  left:50%;
  transform:translateX(-50%);
  transition:all 0.3s;
  &:hover{
    letter-spacing:0.3rem;
  }
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

const disableBeforeToday = (current) => current && current < moment().endOf('day')

const Booking = () =>{
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [member, setMember] = useState('')
  const [phone, setPhone] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [orderTime, setOrderTime] = useState('')
  const handleSent = useCallback(() => {
    let templateParams = {
      email,
      name,
      orderDate,
      orderTime,
      member,
      phone,
    }
    let service_id = 'service_uksrbsh';
    let template_id = 'template_srct15b';
    let userID = 'user_1tMCvGOHxGS0tS2wS6So3'

    emailjs
      .send(service_id, template_id, templateParams, userID)
      .then(response => {
        if(name === ''){
          alert('請輸入稱呼')
        } else if(member === ''){
          alert('請輸入訂位人數')
        } else if(email === ''){
          alert('請輸入E-mail')
        } else if(phone === ''){
          alert('請輸入連絡電話')
        } else if(orderDate === ''){
          alert('請選擇日期')
        } else if(orderTime === ''){
          alert('請選擇時間')
        } else{
          console.log('SUCCESS!', response.status, response.text);
          alert('訂位成功')
        }
      })
      .catch(error => {
        console.log('FAILED...', error);
        alert('伺服器發生錯誤，請改撥打訂位專線或者稍後再試')
      })
  },[email,name,member,phone,orderDate,orderTime])
  return(
    <Container>
      <FormOutter>
        <Title>Booking</Title>
        <FormItem>
          <FormTitle>Name</FormTitle>
          <InputInfo type="text"  
            onChange={e=>{setName(e.target.value)}}
          />
        </FormItem>
        <FormItem>
          <FormTitle>Member</FormTitle>
          <InputInfo type="number" 
            onChange={e=>{setMember(e.target.value)}}
          />
        </FormItem>
        <FormItem>
          <FormTitle>E-mail</FormTitle>
          <InputInfo type="eMail"
            onChange={e=>{setEmail(e.target.value)}}
          />
        </FormItem>
        <FormItem>
          <FormTitle>Phone</FormTitle>
          <InputInfo type="text" 
            onChange={e=>{setPhone(e.target.value)}}
          />
        </FormItem>
        <FormItem>
          <FormTitle>Date</FormTitle>
          <DateOutter>
            <DatePicker 
              style={{
                width:'48%',
                padding:'12px 16px',
                boxShadow:' 4px 4px 8px rgba(0,0,0,0.2)',
                borderRadius:'8px'
              }} 
              placeholder='Date'
              onChange={ (d,dateString) => setOrderDate(dateString) }
              disabledDate={disableBeforeToday}
            />
            <TimePicker 
              style={{width:'48%',
                padding:'12px 16px',
                boxShadow:' 4px 4px 8px rgba(0,0,0,0.2)',
                borderRadius:'8px'
              }} 
              placeholder='Time' 
              format='HH:mm'
              onChange={ (d,dateString) => setOrderTime(dateString) }
              minuteStep={15}
              showTime={{hideDisabledOptions: true}}
              disabledHours={() => [0,1,2,3,4,5,6,7,8,9,10,21,22,23]}
            />
          </DateOutter>
        </FormItem>
      </FormOutter>
      <SubmitBtn onClick={handleSent}>Order!</SubmitBtn>
    </Container>
  )
}

export default Booking