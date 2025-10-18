export const render = (view)=>{
    const app = document.getElementById("app")
    const result = view ? view : ()=>"<h1>404 page not found</h1>"
    console.log(result)
    app.innerHTML = result();
}