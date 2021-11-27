import { SampleData } from "./Data"

// 1- Get Subtitle Text Based On Current Route Path
export const getSubtitle = (currentPath) => {
    return SampleData.pages.filter(el => el.path === currentPath)[0].subtitle
}
