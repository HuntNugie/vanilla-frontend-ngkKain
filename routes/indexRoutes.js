import { auth } from "../middleware/authMiddleware.js"
import { guest } from "../middleware/gusetMiddleware.js"
import { renderAbout } from "../src/pages/about.js"
import { renderDashboardAdmin } from "../src/pages/admin/dashboard.js"
import { renderLogin } from "../src/pages/auth/login.js"
import { renderRegister } from "../src/pages/auth/register.js"
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
    {path:"/login",view:renderLogin,middleware:guest},
    {path:"/register",view:renderRegister,middleware:guest},
    {path:"/dashboard",view:renderDashboardAdmin,middleware:auth},
]