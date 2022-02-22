import throttle from "lodash.throttle";

const formElem = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";

formElem.addEventListener('submit', onFormSubmit);
formElem.addEventListener('input', throttle(onTextData, 500));

const objectStorage = {};
 populateText();

    
function onTextData(e) {
        
    objectStorage[e.target.name] = e.target.value;
    const formDataText = JSON.stringify(objectStorage);
    localStorage.setItem(STORAGE_KEY, formDataText);
}


function onFormSubmit(e) {

  e.preventDefault();

  const formElem = e.currentTarget.elements;
  
      if (formElem.email.value !== '' && formElem.message.value !== '') {
        console.log(objectStorage);
    }
    
    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
}


function populateText() {
   let newDataForm = localStorage.getItem(STORAGE_KEY);
  if ( newDataForm) {
     newDataForm = JSON.parse(newDataForm);
    Object.entries( newDataForm).forEach(([name, value]) => {
      formElem.elements[name].value = value;
    });
  }  
    }










































