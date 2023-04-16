import React, { useState } from 'react'
import './HomeAdmin.css'
import NavbarAdmin from '../NavBarAdmin/NavbarAdmin'
import GestionChampions from '../GestionChampions/GestionChampions'

const HomeAdmin = () => {




  const [composantLive, setComposantLive] = useState("Home")





  if (composantLive == "Home") {

    return (
      <div className='home-admin'>

        <div className='container-nav'>

          <NavbarAdmin setComposantLive={setComposantLive} />

        </div>

        <div className='bienvenue'>
          Bienvenue Admin <i className="bi bi-emoji-smile-fill"></i>
        </div>
      </div>
    )

  }

  else if (composantLive == "GestionChampions") {

    return (
      <div className='home-admin'>

        <div className='container-nav'>
          <NavbarAdmin setComposantLive={setComposantLive} />
        </div>

        <div className='container-body-admin'>

          <GestionChampions />

        </div>
      </div>
    )

  }
}

export default HomeAdmin