import { SampleData } from "./Data"

// 1- Get Subtitle Text Based On Current Route Path
// @params (currentPath) Current Page Path 
// @return  Subtitle for Curren Page 
export const getSubtitle = (currentPath) => {
    return SampleData.pages.filter(el => el.path === currentPath)[0].subtitle
}


// 2- Add comma to Number > 1000
// @params Number Val to convert
// @return Number With Comma
export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
