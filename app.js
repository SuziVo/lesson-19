const form = document.querySelector('#user-login-form');
const personalNumberInput = document.querySelector('input[name="personal-number"]');
const mobileNumberInput = document.querySelector('input[name="mobile-number"]');


form.addEventListener('submit', e=>{
    e.preventDefault()
    console.log(validatePersonalNumber())
    console.log(personalNumberInput.value)
    console.log(mobileNumberInput.value)
})

function validatePersonalNumber(){
    if(!personalNumberInput.value.includes([0-9])){
        personalNumberInput.classList.add('has-error');
        personalNumberInput.parentNode.querySelector('.error-message').innerText = 'Must include only numbers';
        return false;
    }
    personalNumberInput.classList.remove('has-error');
    personalNumberInput.parentNode.querySelector('.error-message').innerText = '';
    return true;


};
function validatePersonalNumber(){
    if(personalNumberInput.value.length < 12){
        personalNumberInput.classList.add('has-error');
        personalNumberInput.parentNode.querySelector('.error-message').innerText = 'must be 11 numbers';
        return false;
        }
}
 function validateMobileNumber(){
     if(mobileNumberInput.value.length<9){
        mobileNumberInput.classList.add('has-error');
        mobileNumberInput.parentNode.querySelector('.error-message').innerText = 'must be 9 numbers';
        return false;
     }
 }


const modalOpenBtn = document.querySelector('#open-modal');
modalOpenBtn.addEventListener('click', () => {
openModal('.my-modal');
})

function openModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.add('visible');
  const modalCloseBtn = modalNode.querySelector('.modal-close');
  modalCloseBtn.addEventListener('click', () => {
    closeModal(modalSelector)
  })
}

function closeModal(modalSelector){
  const modalNode = document.querySelector(modalSelector);
  modalNode.classList.remove('visible');
}