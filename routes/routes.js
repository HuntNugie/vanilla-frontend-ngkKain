import { routes } from "./indexRoutes.js";
import { checkPath } from "../utils/path.js";
import { render } from "../utils/renders.js";

export async function mainRoute(){
    const result = checkPath(routes);
    if(!result){
        render()
        return
    }
    render(result.view);
}

