// contains verifictaion data's states

import formData from "./formDataStore"

export default {
    isNumber : false,
    isLessThan20 : false,
    isInput_1Valid : false,
    isInput_2Valid : false,
    isLetters : false,
    isYesOrNo : false,
    setIsNumber(){
        if(!isNaN(formData.estimatedCorrectGuess)){
            this.isNumber = true
        }else{
            this.isNumber = false
        }
    },
    setIsLessThan20(){
        if(formData.estimatedCorrectGuess <= 20){
            this.isLessThan20 = true
        }else{
            this.isLessThan20 = false
        }
    },
    setIsLetters(){
        if(formData.formElements.formInput_2.value.match(/^[a-zA-Z]{0,3}$/i)){
            this.isLetters = true
        }else{
            this.isLetters = false
        }
    },
    setIsYesOrNo(){
        if(formData.formElements.formInput_2.value.match(/^(yes|no)$/i)){
            this.isYesOrNo = true
        }else{
            this.isYesOrNo = false
        }
    },
}