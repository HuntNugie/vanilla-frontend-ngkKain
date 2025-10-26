import { getData } from "../utils/api.js";


export const auth = async function(){
    try {
       const result =  await getData(`/api/admin${this.path}${window.location.search}`)
       return result.data
    } catch (error) {
        throw new Error("/login")
    }
}