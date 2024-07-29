import { requestResultData } from "./dataReciever";


let ID = localStorage.getItem('resultID')

console.log("Hello from pageLoader.js")
window.addEventListener("DOMContentLoaded", ()=>{
    
    requestResultData(ID)
    localStorage.removeItem('resultID')
})