import React, { useEffect, useState } from 'react'
import './ClassementChampion.css'
import { getAllClassement } from '../apiYag/apiYag'
import { imgChampProfil } from '../apiRiot/util'
import { imgFormat } from '../apiRiot/util'

const ClassementChampion = () => {



  const [classement, setClassement] = useState([])



  useEffect(() => {


    getAllClassement()
      .then(response => {
        const data = response.data;

        setClassement(data);

      }).catch(error => {
        console.log(error);
      });


  }, [])

  console.log(classement);
  let rank = 1;

  const affichageClassement = Object.entries(classement).map(([k, v]) =>

    <div key={k} className="card-classement">

      <div className='rank-classement'>
        {rank++}
      </div>

      <div className="container-img-classement">
        <img className='img-classement rounded-pill border border-3' src={imgChampProfil + v.nom + imgFormat} alt="" />
      </div>

      <div className="nom-classement">
        {v.nom}
      </div>

    </div>
  )




  return (


    <div className='container-ClassementChampion border-0 rounded'>
      {affichageClassement}
    </div>
  )
}

export default ClassementChampion