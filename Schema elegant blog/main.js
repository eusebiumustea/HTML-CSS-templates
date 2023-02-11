const Sub = document.querySelector('.sub')
const emailInput = document.querySelector('#email')
emailInput.addEventListener('submit', onSubmit)
function onSubmit(e) {
    e.preventDefault();
     console.log(emailInput.value)
}