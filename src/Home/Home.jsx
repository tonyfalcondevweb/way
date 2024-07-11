import React, { useEffect, useState } from 'react'
import FormSearch from '../FormSearch/FormSearch'
import ResultSearch from '../ResultSearch/ResultSearch';
import './Home.css'
import { getAllCategorie, getAllChampion, getAllClassement } from '../apiYag/apiYag';
import ListChamp from '../ListChamp/ListChamp';
import ClassementChampion from '../ClassementChampion/ClassementChampion';


const Home = () => {



  const [affichageComposant, setAffichageComposant] = useState("Solo");
  const [nomInvocateur, setNomInvocateur] = useState("");
  const [allChampYagApi, setAllChampYagApi] = useState([]);
  const [allCategorieYagApi, setAllCategorieYagApi] = useState([]);

  // Permet d'avoir la validation de recherche
  const [boutonRecherche, setBoutonRecherche] = useState("");






  // Au lancement l'application obtient tous les champions et categories de YagAPI
  useEffect(() => {

    getAllCategorie()
      .then(response => {
        const data = response.data;

        setAllCategorieYagApi(actual => data)

      }).catch(error => {
        console.log(error);
      });


    getAllChampion()
      .then(response => {
        const data = response.data;

        setAllChampYagApi(actual => data);

      }).catch(error => {
        console.log(error);
      });

  }, [])




  if (affichageComposant === "Solo") {

    return (

      <div className='solo'>
        <div className='solo-formsearch animate__animated animate__backInDown'>
          <div className='logo-home'>
            <img className='logo-png border rounded' width="200" height="200" src="/yag.png" alt="logo du site way"/>
          </div>
          <FormSearch affichageComposant={affichageComposant} setAffichageComposant={setAffichageComposant} nomInvocateur={nomInvocateur} setNomInvocateur={setNomInvocateur} boutonRecherche={boutonRecherche} setBoutonRecherche={setBoutonRecherche} />

        </div>
      </div>

    )

  }



  else if (affichageComposant === "Duo") {

    return (

      <div className='duo'>

        <div className='duo-container-top'>
          <div className='duo-formsearch animate__animated animate__backInDown'>
            <FormSearch affichageComposant={affichageComposant} setAffichageComposant={setAffichageComposant} nomInvocateur={nomInvocateur} setNomInvocateur={setNomInvocateur} boutonRecherche={boutonRecherche} setBoutonRecherche={setBoutonRecherche} />
          </div>

        </div>
        <div>

          <div className='duo-container-bot'>

            <ResultSearch nomInvocateur={nomInvocateur} boutonRecherche={boutonRecherche} setBoutonRecherche={setBoutonRecherche} allChampYagApi={allChampYagApi} allCategorieYagApi={allCategorieYagApi} setAllCategorieYagApi={setAllCategorieYagApi} />

          </div>

        </div>
      </div>
    )

  }

  else if (affichageComposant === "Champion") {

    return (

      <div className='duo'>

        <div className='duo-container-top'>
          <div className='duo-formsearch animate__animated animate__backInDown'>
            <FormSearch affichageComposant={affichageComposant} setAffichageComposant={setAffichageComposant} nomInvocateur={nomInvocateur} setNomInvocateur={setNomInvocateur} boutonRecherche={boutonRecherche} setBoutonRecherche={setBoutonRecherche} />
          </div>

        </div>
        <div>

          <div className='duo-container-bot'>

            <ListChamp allChampYagApi={allChampYagApi} />
          </div>

        </div>
      </div>
    )
  }

  else if (affichageComposant === "Classement") {

    return (

      <div className='duo'>

        <div className='duo-container-top'>
          <div className='duo-formsearch animate__animated animate__backInDown'>
            <FormSearch affichageComposant={affichageComposant} setAffichageComposant={setAffichageComposant} nomInvocateur={nomInvocateur} setNomInvocateur={setNomInvocateur} boutonRecherche={boutonRecherche} setBoutonRecherche={setBoutonRecherche} />
          </div>

        </div>
        <div>

          <div className='duo-container-bot'>
            <ClassementChampion />
          </div>

        </div>
      </div>
    )
  }
}

export default Home
