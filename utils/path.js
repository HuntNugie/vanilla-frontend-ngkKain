export const checkPath = (routes)=>{
    const currentPath = window.location.pathname;
    const result = routes.find(r=>r.path === currentPath);
    return result
}