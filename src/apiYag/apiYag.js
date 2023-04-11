import axios from "axios";

export const urlGetAllCategorie = "/categorie";

export const urlGetAllChampion = "/champion";

export const urlGetClassement = "/classement";

export const urlPostCompte = "/compte";

export const urlPostChampionAdd = "/addChampion";


export const getAllCategorie = () => {
    return axios.get(urlGetAllCategorie);
}

export const getAllChampion = () => {

    return axios.get(urlGetAllChampion);
}

export const getAllClassement = () => {

    return axios.get(urlGetClassement);
}





export const saveCompte = (inputs) => {

    return axios.post(urlPostCompte,inputs);
}

export const postChampionAdd = (inputs) => {

    return axios.post(urlPostChampionAdd,inputs);
}