import './style.css'
import { mainRoute } from '../routes/routes.js'
import { klikPath } from '../utils/path.js';

window.addEventListener("click",klikPath)


window.addEventListener("load",mainRoute);
window.addEventListener("popstate",mainRoute)