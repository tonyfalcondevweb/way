import React, { useEffect, useState } from 'react'
import './ClassementChampion.css'
import { getAllClassement } from '../apiYag/apiYag'
import { imgChampProfil } from '../apiRiot/util'
import { imgFormat } from '../apiRiot/util'
import Loading from '../Loading/Loading'

const ClassementChampion = () => {


  const [load, setLoad] = useState("load")
  const [classement, setClassement] = useState([])



  useEffect(() => {


    getAllClassement()
      .then(response => {
        const data = response.data;

        setClassement(data);

      }).catch(error => {
        console.log(error);
      });

    const timer = setTimeout(() => {
      setLoad("ok");
    }, 700);
    return () => clearTimeout(timer);

  }, [])

  console.log(classement);
  let rank = 1;

  const affichageClassement = Object.entries(classement).map(([k, v]) =>


    <tr className='table-ClassementChampion-row border  ' key={k}>

      <th scope="row" className='table-rank'>
        {rank++}
      </th>

      <td className='table-ClassementChampion-img'>
        <img className='img-classement rounded-pill border border-3' src={imgChampProfil + v.nom + imgFormat} alt="" />
      </td>

      <td className='table-ClassementChampion-nom'>
        {v.nom}
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

      <div className="table-reponsive container-table-ClassementChampion animate__animated animate__fadeIn">
        <table className='table table-ClassementChampion'>
          <tbody>

            {affichageClassement}

          </tbody>
        </table>
      </div>

    )
  }
}

export default ClassementChampion