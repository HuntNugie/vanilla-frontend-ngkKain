import { renderAbout } from "../src/pages/about.js"
import { renderHome } from "../src/pages/home.js"

export const routes = [
    {path:"/",view:renderHome},
    {path:"/about",view:renderAbout},
    {path:"/contact"}
]