import { notFound } from "../src/pages/notFound.js";
export const render = (view)=>{
    const app = document.getElementById("app")
    const result = view ? view : notFound
    app.innerHTML = result();
}