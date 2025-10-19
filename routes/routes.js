import { routes } from "./indexRoutes.js";
import { checkPath } from "../utils/path.js";
import { render } from "../utils/renders.js";

export async function mainRoute(){
    const result = checkPath(routes);
    if(!result){
        render()
        return
    }
    // cek jika mempunyai middleware maka langsung jalani middleware nya
    if(result?.middleware){
        const cek = await result.middleware();
        if(!cek)return
    }
    render(result.view);
    
}

