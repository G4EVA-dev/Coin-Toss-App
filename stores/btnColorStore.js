import documentElementStore from "./documentElementStore";

export default {
    setHeadBtnColor(){
            documentElementStore.headGuessBtn.classList.remove("bg-blue-700");
            documentElementStore.headGuessBtn.classList.add("bg-blue-500");
            documentElementStore.tailGuessBtn.classList.remove("bg-blue-500");
            documentElementStore.tailGuessBtn.classList.add("bg-blue-700");
    },
    setTailBtnColor(){
            documentElementStore.tailGuessBtn.classList.remove("bg-blue-700");
            documentElementStore.tailGuessBtn.classList.add("bg-blue-500"); 
            documentElementStore.headGuessBtn.classList.remove("bg-blue-500"); 
            documentElementStore.headGuessBtn.classList.add("bg-blue-700");
    },
}