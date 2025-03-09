import React, { useEffect, useState } from 'react'
import './App.css'
import Data from './Data';

function Contact(){
  const [lastName,setlastName] =useState('');
  const [firstName,setfirstName]= useState('');
  const [number,setnumber]= useState('');
  const [gmail,setgmail] = useState('');
  const [meassage,setmeassage]= useState('');
  const [detail,setdetail] =useState([]);


  useEffect(()=>{
    const saveddetail =JSON.parse(localStorage.getItem('detail')) || [];
    setdetail(saveddetail);
  },[]);

  useEffect(()=>{
    localStorage.setItem('detail',JSON.stringify(detail));
  },[detail]);

  const addsubmit=()=>{
  if(!lastName || !firstName || !number || !gmail || !meassage){
    alert('Please Fill Out All Fields');
    return;
  }
  const newdetail={
    lastName,
    firstName,
    number,
    gmail,
    meassage,
  };
  setdetail([...detail,newdetail]);
  setlastName('');
  setfirstName('');
  setnumber('');
  setgmail('');
  setmeassage('');
  };
 
return (
    <div>
    <div className='ca'>
        <h1 className='he'>#Contact me#</h1>
        <input type='text' placeholder='Last Name' className='fi'
        value={lastName} onChange={(e)=>setlastName(e.target.value)}></input>
        <input type='text' placeholder='First Name' className='fi'
        value={firstName} onChange={(e)=>setfirstName(e.target.value)}></input><br /><br />
        <input type='number' placeholder='Number' className='fi'
        value={number} onChange={(e)=>setnumber(e.target.value)}></input>
        <input type='gmail' placeholder='E-Mail' className='fi'
        value={gmail} onChange={(e)=>setgmail(e.target.value)}></input><br /><br />
        <input type='text' placeholder='Send Your Meassage' className='fa'
        value={meassage} onChange={(e)=>setmeassage(e.target.value)}></input><br /><br />
       <button onClick={addsubmit}>submit</button>
      </div>
      {/* <tabel>
        <thead>
        <tr>
          <th style={{padding:"20px"}}>Last Name</th>
          <th style={{padding:"20px"}}>First Name</th>
          <th style={{padding:"20px"}}>Ph Number</th>
          <th style={{padding:"20px"}}>gmail</th>
          <th style={{padding:"20px"}}>Meassage</th>
        </tr>
        </thead>
        <tbody>
          {detail.map((detail)=>(
            <tr key={detail.id}>
              <td className='td'>{detail.lastName}</td>
              <td className='td'>{detail.firstName}</td>
              <td className='td'>{detail.number}</td>
              <td className='td'>{detail.lastName}</td>
              <td className="td">{detail.meassage}</td>
            </tr>
          ))}
        </tbody>
      </tabel> */}
       <tabel>
        <thead>
        <tr>
          <th style={{padding:"20px"}}>Last Name</th>
          <th style={{padding:"20px"}}>First Name</th>
          <th style={{padding:"20px"}}>Ph Number</th>
          <th style={{padding:"20px"}}>gmail</th>
          <th style={{padding:"20px"}}>Meassage</th>
        </tr>
        </thead>
        <tbody>
          {detail.map((detail)=>(
            <tr key={detail.id}>
              <td className='td'>{detail.lastName}</td>
              <td className='td'>{detail.firstName}</td>
              <td className='td'>{detail.number}</td>
              <td className='td'>{detail.lastName}</td>
              <td className="td">{detail.meassage}</td>
            </tr>
          ))}
        </tbody>
      </tabel>
    </div>
  )
};

export default Contact