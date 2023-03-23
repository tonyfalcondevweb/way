import axios from "axios";

export const url = "/api/"
export const urlMastery = "/mastery/"

const apiValue = import.meta.env.VITE_VERCEL_ENV_RIOT_KEY;

export const summonerRequest = (inputs) => {
    const config = { headers : {        
        "X-Riot-Token" : apiValue
    } };
    console.log(config);
    return axios.get( url + inputs, config);
}

export const masteryRequest = (inputs) => {
    const config = { headers : {        
        "X-Riot-Token" : apiValue
    } };
    console.log(config);
    return axios.get( urlMastery + inputs + "/top?count=5", config);
}