import React from 'react'
import './NavbarAdmin.css'
import { userKey } from '../../util/util';
const NavbarAdmin = ({ setComposantLive}) => {



    const handleClickGestionChampions = () => {


        setComposantLive("GestionChampions");


    }




    return (

        <nav className='navbar-admin rounded-pill'>
            <button className='navbar-admin-link' onClick={handleClickGestionChampions}>Gestion des champions</button>
            <button className='navbar-admin-link' >Déconnexion</button>
        </nav>
    )
}

export default NavbarAdmin