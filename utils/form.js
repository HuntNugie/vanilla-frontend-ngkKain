export default function sendForm(clas){
    const form = document.querySelector(clas);
    if(!form){
        console.log("tidak ada") 
        return false
    }
    const data = Object.fromEntries(new FormData(form))
    return data
}