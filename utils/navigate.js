import { mainRoute } from "../routes/routes"

export const navigateTo = (path,data={})=>{
    history.pushState(data,null,path)
    mainRoute();
}