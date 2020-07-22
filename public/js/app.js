console.log('this is the console');
//from stack overflow
//https://stackoverflow.com/questions/2507030/email-validation-using-jquery
function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
const email = document.getElementById('email')
const errorEl = document.getElementById('email-error');
const signUpEl = document.querySelector('#signup')
signUpEl.addEventListener('submit', e=>{
    let allInputValid = true;
    toString(email.value);
    console.log(typeof email.value)
    const emailValid = isEmail(email.value)
    console.log(emailValid)
    if(!emailValid){
        e.preventDefault();
        email.classList.add('error');
        console.log(errorEl)
        errorEl.classList.remove('hidden', 'opaque');
        errorEl.innerText = "invalid email address";
        allInputValid = false;
    } else {
        email.classList.remove('error');
        errorEl.classList.add('hidden');
        allInputValid = true;
    }
    if(allInputValid){
        // div with sign up confirmation
        console.log('submitted form')
    }
})