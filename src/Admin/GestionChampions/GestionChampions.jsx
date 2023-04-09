import React, { useEffect, useState } from 'react'
import { getChampListRiot, getRealms } from '../../apiRiot/apiRiot';
import { getAllChampion } from '../../apiYag/apiYag';

const GestionChampions = () => {


  const [versionLive, setVersionLive] = useState("");

  const [champRiotList, setChampRiotList] = useState({});
  const [champYagList, setChampYagList] = useState([]);

  const [newChamp, setnewChamp] = useState([])



  useEffect(() => {

    getRealms()
      .then(response => {
        const data = response.data;

        setVersionLive(data.v)

      }).catch(error => {
        console.log(error);
      });

  }, [])



  useEffect(() => {


    if (versionLive != "") {

      getChampListRiot(versionLive)
        .then(response => {
          const data = response.data.data;


          setChampRiotList(data)

        }).catch(error => {
          console.log(error);
        });


      getAllChampion()
        .then(response => {
          const data = response.data;


          setChampYagList(data);


        }).catch(error => {
          console.log(error);
        });

    }

  }, [versionLive])



  useEffect(() => {

    if (champYagList.length > 0) {


      const trierRiot = Object.entries(champRiotList).sort(([, a], [, b]) => a.key - b.key)


      for (let i = champYagList.length; i < trierRiot.length; i++) {
        const element = trierRiot[i];


        newChamp.push(element);

      }

    }
  }, [champYagList])












  const affichageNewChamp = Object.entries(newChamp).map(([k, v]) =>

    <div key={k}>
      {v[0] + v[1].key}
    </div>

  )

  console.log(newChamp);





  return (
    <div>{affichageNewChamp}</div>
  )
}

export default GestionChampions