import throttle from "lodash.throttle";

const formElem = document.querySelector('.feedback-form');
const inputElem = document.querySelector('input');
const textArea = document.querySelector('textarea');
const STORAGE_KEY = "feedback-form-state";

formElem.addEventListener('submit', onFormSubmit);
formElem.addEventListener('input', throttle(onTextData, 500));


const objectStorage = {};
  populateText();

    
    function onTextData (e) {
    
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
        const newDataForm = JSON.parse(savedData);
            inputElem.value = newDataForm.email;
            textArea.value = newDataForm.message;
       
        
    }
}





        
        //    test.email.value = email;
//    test.message.value = message;
//     objectStorage.email = email;
//     objectStorage.message = message;


        // test.forEach(function (e) {
        
     
        //     e.value = localStorage.getItem(e.name, e.value);
       
        //     e.addEventListener('input', function () {
           
        //         localStorage.setItem(e.name, e.value);
        //     })
        // })



        //        const savedData = localStorage.getItem(STORAGE_KEY);
        // if (savedData) {

        //     const {name, email} = JSON.parse(savedData);
        
        //       formElem.name.value = name;
        //         formElem.email.value = email;
        //         objectStorage.name = name;
        //         objectStorage.email = email;
        //     }
        //   console.log(textData);
        // inputElem.target.name.value = textData.email;
        // textArea.target.name.value = textData.message;
      
    












