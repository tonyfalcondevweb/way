import React, { useEffect, useState } from 'react'
import { getImg, imgChampProfil, imgFormat } from '../apiRiot/util';
import './ListChamp.css'
import Loading from '../Loading/Loading';




const ListChamp = ({ allChampYagApi }) => {



    const [load, setLoad] = useState("load")
    const [searchChamp, setSearchChamp] = useState(allChampYagApi)
    


    useEffect(() => {


        const timer = setTimeout(() => {
            setLoad("ok");
        }, 700);
        return () => clearTimeout(timer);

    }, [])



    const handleChangeChampion = (e) => {

        const re = new RegExp(e.target.value, 'i');
        const temp = allChampYagApi.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.match(re)));

        setSearchChamp(temp);
    }





    const affichageListChamp =
        Object.entries(searchChamp).map(([k, v]) =>

            <tr className='table-ListChamp-row' key={k}>

                <th scope="row" className='table-img'>
                    <img className='img-listChamp rounded-pill border border-3' src={getImg(v.nom)} alt="" />
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



    if (load == "load") {

        return (
            <div className='container-loading'>
                <div className="loading">
                    <Loading />
                </div>
            </div>

        )

    }

    else {
        return (
            <div className='container-listChamp animate__animated animate__fadeIn'>

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
}

export default ListChamp;