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

            <tr className='table-ListChamp-row' key={k}>

                <th scope="row" className='table-img'>
                    <img className='img-listChamp rounded-pill border border-3' src={imgChampProfil + v.nom + imgFormat} alt="" />
                </th>

                <td className='table-nom'>
                    {v.nom}
                </td>

                <td className='table-categorie'>
                    {Object.entries(v.categorieCollection).map(([k, value]) =>

                        <span key={k} className="categorie-nom badge text-bg-dark"> {value.nom} </span>

                    )}
                </td>
            </tr>

        )





    return (
        <div className='container-listChamp'>

            <div className='search-listChamp border-0 rounded-top'>

                <div className='name-input'>Champion :</div>

                <input type="text" className='input-listChamp' onChange={handleChangeChampion} placeholder='Nom de champion' />

            </div>

            <div className="table-reponsive">
                <table className='table table-ListChamp'>
                    <tbody>

                        {affichageListChamp}

                    </tbody>


                </table>


            </div>


        </div>
    )
}

export default ListChamp;