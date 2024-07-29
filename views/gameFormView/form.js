// *handles form verification


import formData from "../../stores/formDataStore";
import verificationData from "../../stores/verificationDataStore";
import formMethods from "../../stores/formNotificationMethods";
import { browseTo, displayThanksBox, sendFormRequest } from "./dataSender";



// Form verification Logic

const formVerfication = {
    checkInput_1Format(){
        verificationData.setIsNumber();
        verificationData.setIsLessThan20();

        if(verificationData.isNumber && verificationData.isLessThan20){
            verificationData.isInput_1Valid = true
            formMethods.removeErrorNotification(formData.formElements.errorDiv_1)
            formMethods.reableInputs(
                formData.formElements.formInput_2,
                formData.formElements.formInput_3)
        }else{
            verificationData.isInput_1Valid = false
            formMethods.displayErrorNotification(formData.formElements.errorDiv_1)
            formMethods.disableInputs(
                formData.formElements.formInput_2,
                formData.formElements.formInput_3)
        }
    },

    checkInput_2Format(){
        verificationData.setIsLetters();
        verificationData.setIsYesOrNo();

        if(verificationData.isLetters && verificationData.isYesOrNo){
            verificationData.isInput_2Valid = true
            formMethods.removeErrorNotification(formData.formElements.errorDiv_2)
            formMethods.reableInputs(
                formData.formElements.formInput_1,
                formData.formElements.formInput_3)
        }else{
            verificationData.isInput_2Valid = false
            formMethods.displayErrorNotification(formData.formElements.errorDiv_2)
            formMethods.disableInputs(
                formData.formElements.formInput_1,
                formData.formElements.formInput_3)
        }
    },

    displaySubmitBtn(){
        if(verificationData.isInput_1Valid && verificationData.isInput_2Valid){
            setTimeout(()=>formData.formElements.submitBtn.classList.remove("hidden"),500)
        }else{
            formData.formElements.submitBtn.classList.add("hidden")
        }
    },
} 


// form Event listeners (Every Action after the 'change' event)

formData.formElements.formInput_1.addEventListener('change',()=>{
    formData.estimatedCorrectGuess = formData.formElements.formInput_1.value;
    formVerfication.checkInput_1Format()
    formVerfication.displaySubmitBtn();
})

formData.formElements.formInput_2.addEventListener('change',()=>{
    formVerfication.checkInput_2Format();
    formData.setHasEnjoyedGame(formData.formElements.formInput_2.value)
    formVerfication.displaySubmitBtn();
})

formData.formElements.formInput_3.addEventListener('change',()=>{
    formData.contact = formData.formElements.formInput_3.value
})

formData.formElements.submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // sendFormRequest()
    displayThanksBox()
    browseTo("/result.html")
  });
  
// browser event listeners

  window.addEventListener('beforeunload',()=>{
    formMethods.resetInputs(
        formData.formElements.formInput_1,
        formData.formElements.formInput_2,
        formData.formElements.formInput_3
    )
})



