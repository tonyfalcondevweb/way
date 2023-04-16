import React, { useEffect, useState } from 'react'
import { masteryRequest, summonerRequest } from '../apiRiot/apiRiot';
import { getImg, imgChampProfil, imgFormat } from '../apiRiot/util';
import { saveCompte } from '../apiYag/apiYag';
import Loading from '../Loading/Loading';
import './ResultSearch.css'


const ResultSearch = ({ nomInvocateur, boutonRecherche, setBoutonRecherche, allChampYagApi, allCategorieYagApi }) => {
















    // 
    // Créer le loading si les les apis/etc.. ne sont pas chargés et une animation loading
    // 
    const [erreur, setErreur] = useState({});

    const [summonerId, setsummonerId] = useState(null);
    const [listChampMasteryId, setlistChampMasteryId] = useState([]);

    const [champResult, setChampResult] = useState([]);
    const [categorieResult, setCategorieResult] = useState([...allCategorieYagApi]);


    const [compteSaveYag, setCompteSaveYag] = useState({});


    const [load, setLoad] = useState("load");





























    // Cliquer sur le bouton de recherche = lance une recherche via le nom d'invocateur saisie
    useEffect(() => {

        if (boutonRecherche === "valider") {

            // Reset des états pour une nouvelle recherche d'invocateur
            setsummonerId(actual => null);
            setlistChampMasteryId(actual => []);
            setChampResult(actual => []);
            setLoad(actual => "load");
            setBoutonRecherche(actual => "");
            setErreur({});

            // Ajout de la proprieter "compteur" à categorieResult
            for (let index = 0; index < categorieResult.length; index++) {
                const element = categorieResult[index];

                element.compteur = 0;

            }

            // Requête RiotAPI afin d'obtenir les données de l'invocateur saisi
            summonerRequest(nomInvocateur)
                .then(response => {

                    compteSaveYag.nom = response.data.name;

                    setsummonerId(response.data.id);

                }).catch(error => {
                    setErreur({ nom: "introuvable", message: "Nom d'invocateur introuvable." });
                    setLoad(actual => "ok");
                });


        }
    }, [boutonRecherche])





    // Obtient les id et maitrise des champ via l'id d'invocateur
    useEffect(() => {

        if (summonerId !== null) {




            // Requête RiotAPI afin d'obtenir ke top5 des champs les plus maitrisés
            // Si l'invocateur à moins de 5 champs maitrisés alors un message d'erreur se créer
            masteryRequest(summonerId)
                .then(response => {
                    const data = response;

                    if (data.data.length < 5) {
                        setErreur({ nom: "maitrise-champ", message: "Trop peu de champions maîtrisés." });
                        setLoad(actual => "ok");
                    }
                    else {
                        setlistChampMasteryId(actual => response.data);
                    }



                }).catch(error => {
                    console.log("Erreur sur l'obtention de la liste des champions maitrisés de l'invocateur");
                });

        }

    }, [summonerId])




    // Obtient les noms et categories des champions via l'id des champions de l'invocateur
    useEffect(() => {

        for (const temp of listChampMasteryId) {

            for (const [key, value] of Object.entries(allChampYagApi)) {


                if (value.keyRiot == temp.championId) {

                    setChampResult(actual => [...actual, { "keyRiot": temp.championId, "nom": value.nom, "maitrise": temp.championPoints, "idYagApi": value.idChampion, "baseName": value.nom, "categorieYag": value.categorieCollection }])

                }
            }
        }
    }, [listChampMasteryId])



    // Compte combien de fois une categorie est présente dans "ChampResult" et place de nombre dans "CategorieResult"
    useEffect(() => {

        if (champResult.length > 0) {

            // Boucle dans ChampResult
            for (let index = 0; index < champResult.length; index++) {
                const element = champResult[index];

                // Boucle chaque nom de ChampResult.categorieYag
                for (let i = 0; i < element.categorieYag.length; i++) {
                    const e = element.categorieYag[i];

                    // Boucle categorieResult afin de comparer et augmenter le compteur pour chaque nom de ChampResult.categorieYag présent
                    for (let k = 0; k < categorieResult.length; k++) {
                        const v = categorieResult[k];


                        if (e.nom == v.nom) {

                            v.compteur = v.compteur + 1

                        }
                    }
                }
            }



            // Obtient le premier champion maitrisé et nom d'invocateur pour les saves dans la bdd via YagAPI
            compteSaveYag.idChampion = champResult[0].idYagApi;

            saveCompte(compteSaveYag).then(
                response => {

                }
            ).catch(
                err => {

                    console.log(err.response);

                }
            )

            setErreur({ nom: "ok" });
            setLoad(actual => "ok");
        }
    }, [champResult])



































    // Const affichage

    // Card champ
    const cardlistChampMasteryId =
        Object.entries(champResult).map(([k, v]) =>

            <div key={k} className={"champ animate__animated animate__fadeInUpBig card" + k}>

                <div className='container-img-champ'>
                    <img className='champ-img rounded-pill border border-3' src={getImg(v.baseName)} alt="" />
                </div>


                <div className='champ-nom'>
                    {v.nom}
                </div>



                <div className='champ-categorie'>
                    {Object.entries(v.categorieYag).map(([k, value]) =>

                        <span key={k} className="badge text-bg-dark champ-categorie-badge"> {value.nom} </span>

                    )}

                </div>

                <div className='champ-maitrise'>
                    Points maitrise : {v.maitrise}
                </div>

            </div>

        )
    // 


    // Categorie
    const triCategorieResult = categorieResult.sort((a, b) => b.compteur - a.compteur);

    const affichageCategorieResult =

        <div className="categorie-result">
            {Object.entries(triCategorieResult).map(([k, v]) =>

                v.compteur != 0 ?

                    <p className='text-result' key={k}>
                        {v.nom + " : " + v.compteur}
                    </p>
                    : null
            )}
        </div>



    // 

    // Erreur
    useEffect(() => {
        if (erreur === "maitrise-champ") {

            <h2> ({listChampMasteryId.length}/5)</h2>
        }

        else if (erreur === "introuvable") {



            <div className=''>
                <h2>Nom d'invocateur introuvable.</h2>
            </div>

        }
        return () => {

        }
    }, [erreur])
    // 
    // Fin Const affichage






























    




    // Affichage

    if (load == "load") {
        return (
            <div className='container-resultSearch'>
                <div className="loading">
                    <Loading />
                </div>
            </div>
        )
    }



    else {
        if (erreur.nom !== "ok") {
            return (

                <div className='container-resultSearch erreur'>
                    <h2 className='title-erreur'>{erreur.message}</h2>
                </div>


            )
        }
        else if (erreur.nom === "ok") {

            return (
                <div className='container-resultSearch result'>


                    <div className="container-invocateur">
                        <div className='invocateur'>

                            {cardlistChampMasteryId}

                        </div>
                    </div>




                    <div className='container-categorie'>
                        <div className="categorie animate__animated animate__fadeInUpBig">

                            {affichageCategorieResult}

                        </div>
                    </div>


                </div>
            )

        }
    }
}

export default ResultSearch;