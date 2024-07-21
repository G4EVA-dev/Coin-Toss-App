// contains actions to be made after verification

export default {
    disableInputs(...inputs){
        inputs.forEach((input)=>input.disabled = true)
    },
    reableInputs(...inputs){
        inputs.forEach((input)=>input.disabled = false)
    },
    displayErrorNotification(errorDiv){
        errorDiv.classList.remove("hidden")
        setTimeout(()=>{
            errorDiv.classList.remove("opacity-0","-translate-y-1/2")  
        },0)
    },
    removeErrorNotification(errorDiv){
        errorDiv.classList.add("opacity-0","-translate-y-1/2")
        setTimeout(()=>{     
            errorDiv.classList.add("hidden")
        },500) 
    },
    resetInputs(...inputs){
        inputs.forEach(input=>input.value = "")
    }, 
}