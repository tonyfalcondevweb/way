import React, { useState } from 'react'
import { imgChampProfil, imgFormat } from '../apiRiot/util';
import './ListChamp.css'




const ListChamp = ({ allChampYagApi }) => {



    // console.log(allChampYagApi);

    const [searchChamp, setSearchChamp] = useState(allChampYagApi)


    const handleChangeChampion = (e) => {
        
        const re = new RegExp(e.target.value, 'i');
        const temp = allChampYagApi.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.match(re)));
    
        setSearchChamp(temp);
    }





    const affichageListChamp =
        Object.entries(searchChamp).map(([k, v]) =>

            <div key={k} className="card-listChamp">

                <div className="start-listChamp">
                    <div className="img-listChamp">
                        <img className='img-listChamp rounded-pill border border-3' src={imgChampProfil + v.nom + imgFormat} alt="" />
                    </div>

                    <div className="nom-listChamp">
                        {v.nom}
                    </div>
                </div>



                <div className="end-listChamp">
                    <div className="categorie-listChamp">
                        {Object.entries(v.categorieCollection).map(([k, value]) =>

                            <span key={k} className="badge text-bg-dark"> {value.nom} </span>

                        )}
                    </div>
                </div>

            </div>
        )





    return (
        <div className='container-listChamp border-0 rounded'>

            <div className='search-listChamp'>

                <div className='name-input'>Champion :</div>

                <input type="text" onChange={handleChangeChampion} className='form-control input-listChamp' placeholder='Nom de champion'/>

            </div>

            <div className="container-card">

                {affichageListChamp}

            </div>


        </div>
    )
}

export default ListChamp;