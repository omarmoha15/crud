
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employees from '../Employees'; // Update the path
import {
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import './Login.css'
import asier from '../iamge/asier.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Find the user with matching credentials
    const user = Employees.find(
      (employee) =>
        employee.user_name === email && employee.password === password
    );

    if (user) {
      // Simulate a successful login
      navigate('/dashboard');
    } else {
      // Handle incorrect credentials
      alert('Invalid username or password');
    }
  };

  return (
    <MDBRow style={{ fontFamily: 'Tajawal, sans-serif' }}>
      <MDBCol md='8' className='main-left' style={{ fontFamily: 'Tajawal, sans-serif' }}>
        <div className='d-flex flex-column content-inner'>
          <div className='text-center'>
            <div className='logo-mobile'>
            <img
              src={'https://ars.gov.sa/assets/img/newlogo.png'}
              alt='logo'
            />
            </div>
            <div className='mt-5 ml-1'>
              <h4 dir='rtl' style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'right' }}>
                تسجيل الدخول
              </h4>
            </div>
          </div>

          <div  dir='rtl'>
            <input
              className='custom-input mb-4 mt-4'
              type='email'
              placeholder='اسم المستخدم'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='custom-input mb-4'
              type='password'
              placeholder='كلمه المرور'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

           <button className='custom-button mb-4' onClick={handleLogin}>
            تسجيل الدخول
          </button>
          </div>

    

          <div className='d-flex flex-row align-items-center justify-content-center pb-4 mb-4'>
          <MDBBtn outline className='mx-2' color='green' onClick={() => navigate('/register')}>
              انشاء
            </MDBBtn>
            <p className='mb-0'>ما عندك حساب ؟</p>
           
          </div>
        </div>
      </MDBCol>
      <MDBCol md='4' style={{height:'100vh'}} className='main-right'>
          <div className="d-flex justify-content-center gradient-custom-2   mb-4 mt-0" >
            <div className="text-white position-relative bg-img">
            
             
                <div className="image-overlay">
                  <div className="data-right">
                  <img
                  src={asier}
                  style={{ width: '20vh', height: '20vh', objectFit: 'cover' }}
                  alt="Asier"
                />
                  <div className="text-img">
                    مرحبا بك في أمانة منطقة عسير
                  </div>
                 </div>
              </div>
            </div>
          </div>
        </MDBCol>
    </MDBRow>
  );
}

export default Login;
