import React from 'react'
import './NavbarAdmin.css'
const NavbarAdmin = ({setComposantLive}) => {




    const handleClickGestionChampions = () => {

        const timer = setTimeout(() => {
            setComposantLive(actual => "GestionChampions");
        }, 550);
        return () => clearTimeout(timer);
    }






    return (

        <nav className='navbar-admin rounded-pill'>
            <button className='navbar-admin-link' onClick={handleClickGestionChampions}>Gestion des champions</button>
        </nav>
    )
}

export default NavbarAdmin