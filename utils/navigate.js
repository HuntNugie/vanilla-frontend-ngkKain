import { mainRoute } from "../routes/routes"

export const navigateTo = (path)=>{
    history.pushState({},null,path)
    mainRoute();
}