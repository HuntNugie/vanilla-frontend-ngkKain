import { renderAbout } from "../src/pages/about.js"
import { renderContact } from "../src/pages/contacts.js"
import { renderHome } from "../src/pages/home.js"
import { renderProduct } from "../src/pages/products.js"
import { renderService } from "../src/pages/services.js"

export const routes = [
    {path:"/",view:renderHome},
    {path:"/about",view:renderAbout},
    {path:"/services",view:renderService},
    {path:"/products",view:renderProduct},
    {path:"/contact",view:renderContact},
]