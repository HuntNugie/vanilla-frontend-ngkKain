import { routes } from "./indexRoutes.js";
import { checkPath } from "../utils/path.js";
import { render } from "../utils/renders.js";
import { navigateTo } from "../utils/navigate.js";
import { setStore } from "../src/pages/store/admin.store.js";

export async function mainRoute(){
    const result = checkPath(routes);
    if(!result){
        render()
        return
    }
    // cek jika mempunyai middleware maka langsung jalani middleware nya
    if(result?.middleware){
        try {
        const cek = await result.middleware();
        setStore(cek)
        } catch (error) {
            return navigateTo(error.message)
        }
    }
    render(result.view);
}

