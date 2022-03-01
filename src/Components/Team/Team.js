import React, { useState } from 'react';
import './Team.css';

const Team = props => {
    const {gender,name,email,phone,picture} = props.member;
    const fullName = name.first +" "+ name.last;
    const image = picture.large;

    const [mobile,setMobile]=useState('');
    const addMobile = () => {
        setMobile(phone)
    }
    return (
        <div className='memberCard'>
            <img src={image} alt="" />
            <div>
               <h3>Name: {fullName}</h3>
               <p>Email: {email}</p>
               <p>Gender: {gender}</p>
               <p>Mobile: {mobile} </p>
               <p>learn About me</p>
               <button className='add-btn' onClick={addMobile}>Add Mobile</button>
               <button onClick={()=> props.addMemberHandle(props.member)}  className='add-btn'>Add me</button>
            </div>
        </div>
    );
};

export default Team;