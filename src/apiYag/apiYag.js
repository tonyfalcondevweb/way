import axios from "axios";

export const urlGetAllCategorie = "/categorie/";

export const urlGetAllChampion = "/champion/";

export const urlPostCompte = "/compte/";


export const getAllCategorie = () => {
    console.log(urlGetAllCategorie);
    return axios.get(urlGetAllCategorie);
}

export const getAllChampion = () => {

    return axios.get(urlGetAllChampion);
}

export const saveCompte = (inputs) => {

    return axios.post(urlPostCompte,inputs);
}