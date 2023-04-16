import axios from "axios";
import { authHeader } from "../util/util";

export const urlGetAllCategorie = "/categorie";

export const urlGetAllChampion = "/champion";

export const urlGetClassement = "/classement";

export const urlPostCompte = "/compte";

export const urlPostChampionAdd = "/addChampion";

export const urlPostLoginAdmin = "/login";


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

    const config = { headers : authHeader()};

    return axios.post(urlPostChampionAdd,inputs,config);
}

export const postLoginAdmin = (inputs) => {

    return axios.post(urlPostLoginAdmin,inputs);
}