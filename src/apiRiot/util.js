import { getRealms } from "./apiRiot";




export const imgChampProfil = "https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/";

export function getImg(inputs) {


    let imgLive = "https://ddragon.leagueoflegends.com/cdn/13.7.1/img/champion/" + inputs + ".png"

        

    return imgLive
}

export const imgFormat = ".png";