import { defaultIcon, visitIcon, homeIcon, jobIcon, parkIcon } from "./ui.js";

const VISIT = "visit"
const HOME = "home"
const JOB= "job"
const PARK = "park"

const ZIYARET = "Ziyaret"
const EV = "Ev"
const IS = "Is"
const PARK_YERI = "Park Yeri"
const TANIMSIZ = "Tanimsiz"

//gelen parametreye gore icon doldur
export function getNoteIcon(status){
    switch (status) {
        case VISIT:
            return visitIcon;
        case HOME:
            return homeIcon;
        case JOB:
            return jobIcon;
        case PARK:
             return parkIcon;
        default:
            return defaultIcon
    }
}


//tarih formati
export const formatDate = (date) =>{
    return new Date(date).toLocaleDateString('tr',{
        day: "2-digit",
        month: "long",
        year: "numeric"
    })
}

//status degeri gore ekrana basacak metin
export const getStatus = (status) =>{
    switch (status) {
        case VISIT:
            return ZIYARET;
        case HOME:
            return EV;
        case JOB:
            return IS;
        case PARK:
             return PARK_YERI;
        default:
            return TANIMSIZ
    }
}

//baska cozum
export const statusObj = {
    visit: ZIYARET,
    park: PARK_YERI,
    home: EV,
    job: IS
}