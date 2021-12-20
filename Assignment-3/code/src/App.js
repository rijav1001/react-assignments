import React from 'react';
import logo from './logo.svg';
import './App.css';


var arrow="<"
const details = {
  name: 'Adame Schruder',
  employeeID: '00005152',
  appointment: '9:00 (24-11-2021)',
  email: 'abc@reactmail.com',
  phone: '+1715648235',
  status: 'In Progress',
  door: 'Mark',
  time: '11:00 (30-11-2021)',
  prodImg: 'https://www.w3schools.com/howto/img_avatar.png',
  prodDescription: 'A smartphone is a portable device that combines mobile telephone and computing functions into one unit.'
}
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
      <div className='header'>
        <p>{arrow}</p>
        <h4>{details.name}</h4>
        <button>Print</button>
        <p className='emp-ID'>{details.employeeID}</p>
      </div>
      <div className='customer-info'>
        <ul>
          <li><strong>Appointment:</strong> {details.appointment}</li>
          <li><strong>Email:</strong> {details.email}</li>
          <li><strong>Phone:</strong> {details.phone}</li>
        </ul>
      </div>
      <div className='order-info'>
        <div className='order-info-sub'>
          <strong>Status</strong>
          <div>{details.status}</div>
        </div>
        <div className='order-info-sub'>
          <strong>Door</strong>
          <div>{details.door}</div>
        </div>
        <div className='order-info-sub'>
          <strong>Time</strong>
          <div>{details.time}</div>
        </div>
      </div>
      <div className='product-list'>
        <input type='checkbox'/><img src={details.prodImg} alt='product image'/>
        <p><strong>Smartphone</strong> <br></br> {details.prodDescription}</p>
      </div>
    </div>
  );
}

export default App;
