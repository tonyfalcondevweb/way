import React, { useEffect, useState } from 'react'
import FormSearch from '../FormSearch/FormSearch'
import ResultSearch from '../ResultSearch/ResultSearch';
import './Home.css'
import { getAllCategorie, getAllChampion} from '../apiYag/apiYag';
import ListChamp from '../ListChamp/ListChamp';

const Home = () => {


  // mettre un loading tant que l'apiYAG (allChampYagApi) n'a pas chargé


  const [affichageComposant, setAffichageComposant] = useState("Solo");

  const [nomInvocateur, setNomInvocateur] = useState("");


  const [allChampYagApi, setAllChampYagApi] = useState([]);

  const [allCategorieYagApi, setAllCategorieYagApi] = useState([]);

  // permet d'avoir la validation de recherche
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
        <div className='solo-formsearch'>

          {/* <button type="button" className="btn btn-primary btn-champList">Primary</button> */}
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

            <ListChamp allChampYagApi={allChampYagApi}/>
          </div>

        </div>
      </div>
    )

  }
}

export default Home