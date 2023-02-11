//const form = document.getElementById('email');

//console.log(document.querySelector('h1'))
//console.log(form)
// Multiple element
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// const ul = document.querySelector('.items');
// ul.remove();
// ul.firstElementChild.textContent = 'Hello'
// ul.children[1].innerText = 'Hello'
// ul.lastElementChild.innerHTML = '<h4>Hello</h4>'
//  const btn = document.querySelector('.btn')
//  btn.style.background = 'red'
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault()
//     document.querySelector('body').style.background = 'black'
//     document.querySelector('#my-form').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value, emailInput.value)
    if(nameInput.value === '' || emailInput.value === '') {
         msg.innerHTML = 'Please enter all fields'
    } else {
        console.log('succsess')
    }
}