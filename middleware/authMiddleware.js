import { getData } from "../utils/api.js";
import { navigateTo } from "../utils/navigate.js";


export const auth = async function(){
    try {
       const result =  await getData(`/api/admin${this.path}`)
       return result
    } catch (error) {
        navigateTo("/login")
        return false
    }
}