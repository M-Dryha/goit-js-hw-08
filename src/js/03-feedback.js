import throttle from "lodash.throttle";

const formElem = document.querySelector('.feedback-form');
const inputElem = document.querySelector('input');
const textArea = document.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";

formElem.addEventListener('submit', onFormSubmit);
//  textArea.addEventListener('input', throttle(textAreaInput, 500));

const objectStorage = {};
populateText();


formElem.addEventListener('input', throttle(onTextData, 500));
    
    function onTextData (e) {
    
    // const storageData = objectStorage[e.target.name];
    //    JSON.stringify(objectStorage[e.target.name] = e.target.value);
    // console.log(objectStorage);
    objectStorage[e.target.name] = e.target.value;
    const formData = JSON.stringify(objectStorage);
    localStorage.setItem('STORAGE_KEY', formData);


}


function onFormSubmit(e) {
    e.preventDefault();
    console.log(objectStorage);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}


function populateText() {

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const textData = JSON.parse(savedData);
        textData.forEach((name, value) => {
          inputElem.value = textData.name;
        textArea.value = textData.name;
        })
        //   console.log(textData);
        // inputElem.target.name.value = textData.email;
        // textArea.target.name.value = textData.message;
      
    }
}
// }
// function textAreaInput(event) {
//     const message = event.target.value;
//     localStorage.setItem(STORAGE_KEY, message);
// }


// function populateTextArea() {
//     const textAreaMsg = localStorage.getItem(STORAGE_KEY);
    
//     if (textAreaMsg) {
//         const test = JSON.parse(textAreaMsg);
        
//         test.email = formElem.elements.email.value;
//         test.message = formElem.elements.message.value;
// //         formElem.email.value = email;
// //         formElem.message.value = message;
// // objectStorage.email.value = email;
// //         objectStorage.message.value = message;
// //         console.log(textAreaMsg);
//     }

// }


// import throttle from 'lodash.throttle';

// const KEY = 'feedback-form-state';
// const formData = {};

// const form = document.querySelector('.feedback-form');

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// updateForm();

// function updateForm() {
//   const savedData = localStorage.getItem(KEY);
//   if (savedData) {
//     const { email, message } = JSON.parse(savedData);
//     form.email.value = email;
//     form.message.value = message;
//     formData.email = email;
//     formData.message = message;
//   }
// }

// function onFormInput(event) {
//   formData.email = form.elements.email.value;
//   formData.message = form.elements.message.value;
//   localStorage.setItem(KEY, JSON.stringify(formData));
// }

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formDataToSend = new FormData(event.currentTarget);
//   formDataToSend.forEach((value, name) => {
//     formData[name] = value;
//   });

//   event.currentTarget.reset();
//   localStorage.removeItem(KEY);

//   console.log(formData);
// }