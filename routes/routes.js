import { routes } from "./indexRoutes.js";
import { checkPath } from "../utils/path.js";
import { render } from "../utils/renders.js";

export async function mainRoute(){
    const result = checkPath(routes);
    if(!result){
        render("<h1>404 page not found</h1>")
        return
    }
    render(result.view);
}

