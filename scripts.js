const inputArea = document.querySelector("#english");
const outputArea = document.querySelector("#braille_lang");
const translateBtn = document.querySelector("#translate_btn");

var brailleURL = "https://api.funtranslations.com/translate/braille/unicode.json";

function translateToMinion(text){
    return brailleURL + "?" + "text=" + text;
};

function errorHandler(error){
    console.log("error occured : ", error);
};

function clickHandler(){
    var textInput = inputArea.value;

    fetch(translateToMinion(textInput))
    .then(response => response.json())
    .then(json => showOutput(json.contents.translated.join(" ")))
    .catch(errorHandler)
};

function showOutput(text){
    outputArea.innerHTML = text;
}

translateBtn.addEventListener("click", clickHandler);