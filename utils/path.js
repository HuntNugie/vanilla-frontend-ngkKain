import sendForm from "./form.js";
import { navigateTo } from "./navigate.js";
import { getData, postData } from "./api.js";
export const checkPath = (routes)=>{
    const currentPath = window.location.pathname;
    const result = routes.find(r=>r.path === currentPath);
    return result
}

export const klikPath = async(event)=>{
    event.preventDefault();
    if(event.target.classList.contains("navigate-link")){
        navigateTo(event.target.href)
    }else if(event.target.id === "profileBtn"){
        document.getElementById("dropdownMenu").classList.toggle("hidden")
        if(!document.getElementById("profileBtn").contains(event.target)){
            document.getElementById("dropdownMenu").classList.toggle("hidden")
        }
    }else if(event.target.classList.contains("submit-register")){
        try {
        const data = sendForm(".form-register")
        const url = import.meta.env.VITE_API_REGISTER
        // kirimkan
        const kirim = await postData(url,data)
        navigateTo("/login")
        } catch (error) {
            document.querySelector(".form-register").reset();
            console.log(error)
        }
    }else if(event.target.classList.contains("submit-login")){
        console.log("berhasil login")
        try {
            const data = sendForm(".form-login")
            const url = import.meta.env.VITE_API_LOGIN
            // kirimkan
            const kirim = await postData(url,data)
            navigateTo("/dashboard")
        } catch (error) {
            document.querySelector(".form-login").reset();
            console.log(error)
        }
    }
}