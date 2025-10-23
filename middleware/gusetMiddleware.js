import { getData } from "../utils/api.js"
import { navigateTo } from "../utils/navigate.js"
export const guest = async()=>{
    try {
    const valid = await getData("/api/admin/check")
    navigateTo("/dashboard")
    } catch (error) {
        return false
    }
}