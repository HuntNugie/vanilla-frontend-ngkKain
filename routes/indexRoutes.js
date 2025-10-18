import { renderAbout } from "../src/pages/about.js"
import { renderHome } from "../src/pages/home.js"
import { renderService } from "../src/pages/services.js"

export const routes = [
    {path:"/",view:renderHome},
    {path:"/about",view:renderAbout},
    {path:"/services",view:renderService}
]