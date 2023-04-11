import React, { useEffect, useState } from 'react'
import { getChampListRiot, getRealms } from '../../apiRiot/apiRiot';
import { getAllCategorie, getAllChampion, postChampionAdd } from '../../apiYag/apiYag';
import './GestionChampions.css'
import Loading from '../../Loading/Loading';
import { getImg } from '../../apiRiot/util';

const GestionChampions = () => {

  const [load, setLoad] = useState("load");
  const [notifAjouter, setNotifAjouter] = useState(null);

  const [versionLive, setVersionLive] = useState("");

  const [champRiotList, setChampRiotList] = useState({});
  const [champYagList, setChampYagList] = useState([]);
  const [allCategorie, setAllCategorie] = useState([]);


  const [champion, setChampion] = useState({});
  const [categorieCollection, setCategorieCollection] = useState([]);

  const [newChamp, setnewChamp] = useState([]);









  useEffect(() => {

    getRealms()
      .then(response => {
        const data = response.data;

        setVersionLive(data.v)

      }).catch(error => {
        console.log(error);
      });

    getAllCategorie()
      .then(response => {
        const data = response.data;

        setAllCategorie(data)

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

        if (i == champYagList.length) {
          newChamp.push(element);
        }

      }

    }
  }, [champYagList])



  useEffect(() => {

    if (newChamp.length > 0) {

      setLoad('ok')

    }

  }, [champYagList])




  useEffect(() => {

    if (Object.keys(champion).length > 0 && categorieCollection.length > 0) {

      postChampionAdd(champion)
        .then(response => {
          const data = response.data;

          setNotifAjouter(data)

        }).catch(error => {
          console.log(error);
        });

    }

  }, [champion])























  const handleClickCategorie = (event, k) => {



    const classNameNative = "nom-categorie-gestion-champions badge text-bg-dark"
    const classNameActive = "nom-categorie-gestion-champions badge text-bg-light"

    let categorieBadge = document.getElementById("categorie-" + k);


    if (categorieBadge.className == classNameNative) {
      categorieBadge.className = classNameActive;

      setCategorieCollection(actual => [...actual, { "idCategorie": k }])

    }
    else {

      categorieBadge.className = classNameNative;


      for (let i = 0; i < categorieCollection.length; i++) {
        const element = categorieCollection[i];




        if (element.idCategorie == k) {
          categorieCollection.splice(i, 1)
        }

      }
    }
  }



  const handleClickAjouter = (event, nom, key) => {

    setChampion({ "nom": nom, "keyRiot": key, categorieCollection });

  }

































  console.log(notifAjouter);






  const affichageNewChamp = Object.entries(newChamp).map(([k, v]) =>

    <div key={k} className='card-gestion-champions border-0 rounded'>
      <div className='card-top-gestion-champions'>


        <div className='container-img-gestion-champion'>
          <img className='img-gestion-champions rounded-pill border border-3' src={getImg(v[0])} alt="" />
        </div>

        <div className='container-info-gestion-champions'>

          <div className='nom-gestion-champions'>
            Nom : {v[0]}
          </div>

          <div className='key-gestion-champions'>
            Id : {v[1].key}
          </div>
        </div>
      </div>

      <div className="card-bot-gestion-champions">
        <div className='card-bot-title'>
          Categorie :
        </div>
        <div className='card-categorie'>


          {Object.entries(allCategorie).map(([k, v]) =>

            <div key={k} onClick={event => handleClickCategorie(event, k)} id={'categorie-' + k} className='nom-categorie-gestion-champions badge text-bg-dark'>
              {v.nom}
            </div>

          )}
        </div>
        <div className='card-container-btn'>
          <button onClick={event => handleClickAjouter(event, v[0], v[1].key)} className='card-btn btn btn-danger'>Ajouter</button>
        </div>
      </div>
    </div>
  )









  if (load == "load") {

    return (
      <div className='gestion-champions'>

        <div className='container-load'>

          <Loading />

        </div>
      </div>
    )

  }



  else if (load == "ok" && notifAjouter === null) {

    return (
      <div className='gestion-champions'>

        <div className='card-new-champ'>

          <div className='erreur-container text-danger'>! Vous devez choisir au moins une catégorie !</div>

          {affichageNewChamp}

        </div>
      </div>
    )
  }

  else if (load == "ok" && notifAjouter !== null) {

    return (
      <div className='gestion-champions'>

        <div className='card-new-champ'>


          <div className='card-gestion-champions border-0 rounded'>
            <div className='card-top-gestion-champions'>


              <div className='container-img-gestion-champion'>
                <img className='img-gestion-champions rounded-pill border border-3' src={getImg(notifAjouter.nom)} alt="" />
              </div>

              <div className='container-info-gestion-champions'>

                <div className='nom-gestion-champions'>
                  Nom : {notifAjouter.nom}
                </div>

                <div className='key-gestion-champions'>
                  Id : {notifAjouter.keyRiot}
                </div>
              </div>
            </div>

            <div className="notif-ajouter">

              Ajouté !

            </div>
          </div>



        </div>
      </div>
    )
  }
}

export default GestionChampions