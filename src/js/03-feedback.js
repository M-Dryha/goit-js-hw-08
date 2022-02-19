const formElem = document.querySelector('.feedback-form');
const inputElem = document.querySelector('input');
const textArea = document.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";

formElem.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', textAreaInput);
populateTextArea();

const objectStorage = {};

formElem.addEventListener('input', (e) => {
    
    // const storageData = objectStorage[e.target.name];
   JSON.stringify(objectStorage[e.target.name] = e.target.value);
    console.log(objectStorage);
    

})


// function textAreaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log(objectStorage);
//     event.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
    
// }

// function populateTextArea() {
//     const textAreaMsg = localStorage.getItem(STORAGE_KEY);
//     if (textAreaMsg) {
//         textArea.value = textAreaMsg;
//         console.log(textAreaMsg);
//     }

// }