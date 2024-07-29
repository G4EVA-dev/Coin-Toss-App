import documentElementStore from "./documentElementStore";

export default {
    setHeadBtnColor(){
        documentElementStore.headGuessBtn.classList.remove("text-black");
        documentElementStore.headGuessBtn.classList.add("bg-black");
        documentElementStore.headGuessBtn.classList.add("text-white");
        documentElementStore.tailGuessBtn.classList.remove("bg-black");
        documentElementStore.tailGuessBtn.classList.remove("text-white");
        documentElementStore.tailGuessBtn.classList.add("text-black");
    },
    setTailBtnColor(){
        documentElementStore.tailGuessBtn.classList.remove("text-black");
        documentElementStore.tailGuessBtn.classList.add("bg-black");
        documentElementStore.tailGuessBtn.classList.add("text-white");
        documentElementStore.headGuessBtn.classList.remove("bg-black");
        documentElementStore.headGuessBtn.classList.remove("text-white");
        documentElementStore.headGuessBtn.classList.add("text-black");
    },
    resetBtnColors(){
        documentElementStore.tailGuessBtn.classList.remove("bg-black");
        documentElementStore.tailGuessBtn.classList.remove("text-white"); 
        documentElementStore.headGuessBtn.classList.remove("bg-black");
        documentElementStore.headGuessBtn.classList.remove("text-white");
    },
}