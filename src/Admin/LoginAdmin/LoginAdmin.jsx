import React, { useState } from 'react'
import './LoginAdmin.css'
import { postLoginAdmin } from '../../apiYag/apiYag';
import HomeAdmin from '../HomeAdmin/HomeAdmin';

const LoginAdmin = () => {




  const [loginConnect, setLoginConnect] = useState(null);
  const [loginResponse, setLoginResponse] = useState(null);



  const handleSubmit = (e) => {
    e.preventDefault();
  };




  const handleChangeKeyLogin = (e) => {
    setLoginConnect({ "keyLog" : e.target.value})
}



  const handleClickLoginAdmin = () => {

    postLoginAdmin(loginConnect)
      .then(response => {
        const data = response.data;

        setLoginResponse(data);

      }).catch(error => {
        console.log(error);
      });
  }



  console.log(loginConnect);



  if (loginResponse == true) {

    return (

    
          <HomeAdmin />

  
    )
    
  }
  else{

    return (

      <div className='container-login'>
        <form className='rounded form-login' onSubmit={handleSubmit}>
  
          <input onChange={handleChangeKeyLogin} className='form-control rounded-end-0 rounded-start input-formSearch input-login' type="text" />
  
          <button onClick={handleClickLoginAdmin} className='btn btn-formSearch rounded-start-0 rounded-end-pill'>Valider</button>
  
        </form>
      </div>
  
    )

  }




}

export default LoginAdmin