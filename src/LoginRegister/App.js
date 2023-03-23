import React, { useState } from 'react';
import './LoginRegister.css';
import { Login } from './Login';
import { Register } from './Register';

function LoginRegister() { 
  const[currentForm, setCurrentForm] = useState('login'); /*Which form displayed atm*/
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        /*current form loginse logini yoksa registeri gosterir */
        /*toggleForm yaparak sayfada kalmasini sagliyoruz*/
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
     }
    </div>
  );
}

export default LoginRegister;
