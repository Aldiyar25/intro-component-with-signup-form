const inputs = document.querySelectorAll('input')

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const formError = document.querySelectorAll('.form_error');

const btn = document.querySelector('#btn-form');

btn.addEventListener('click', ()=> {
    // show the error message
    formError.forEach((e)=> {
        e.style.display = 'block'
       
    })
    // change styles
    lastName.style.marginTop = '15px'
    email.style.marginTop = '20px'
    password.style.margin = '20px 30px 10px 30px'
    // add error class
    inputs.forEach((e)=> {
        e.classList.add('error')
    })
    // remove errors if the value is not empty
    if(firstName.value != '') {
        firstName.classList.remove('error')
        formError[0].style.display = ''
    }
    if (lastName.value != '') {
        lastName.classList.remove('error')
        formError[1].style.display = ''
    }
    if(password.value != '') {
        password.classList.remove('error')
        formError[3].style.display = ''
    }
    
})