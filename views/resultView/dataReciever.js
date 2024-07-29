
// function to update the current page after a GET request by fetch

function updatePage(htmlData, isResultPage=false, data=null){
    let parser = new DOMParser()
    let doc = parser.parseFromString(htmlData, 'text/html')

    if(isResultPage){
        doc.querySelector("#correctGuesses").textContent = data?.numberOfCorrectGuesses
        doc.querySelector("#minutesSpent").textContent = data?.minutesSpent
    }else{
        let headContent = doc.querySelector('head').innerHTML
        let bodyContent = doc.querySelector('body').innerHTML
    
        document.head.innerHTML = headContent
        document.body.innerHTML = bodyContent  
    }
    
}


// exporting required functions for form actions


export const restorePreviousPage = async ()=>{
    try {
        let response = await fetch(window.location.pathname)
        let data = await response.text()

        updatePage(data)
    } catch (error) {
        console.log("error: ", error)
    }
}

let resultID = "669fc6abe65d91407ad5e673";

export const requestResultData =  async ()=>{
    try {
        let response = await fetch(`http://localhost:443/result?id=${resultID}`)
        let data = await response.json()
        document.querySelector("#correctGuesses").textContent = data?.numberOfCorrectGuesses
        document.querySelector("#minutesSpent").textContent = data?.minutesSpent
        document.getElementById("app").classList.remove("hidden")
        document.getElementById("app").classList.add("flex")

    } catch (error) {
        console.log("error: ", error)
    }
}