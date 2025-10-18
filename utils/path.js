import { navigateTo } from "./navigate.js";
export const checkPath = (routes)=>{
    const currentPath = window.location.pathname;
    const result = routes.find(r=>r.path === currentPath);
    return result
}

export const klikPath = (event)=>{
    event.preventDefault();
    if(event.target.classList.contains("navigate-link")){
        navigateTo(event.target.href)
    }
}