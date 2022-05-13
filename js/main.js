const alertDiv = document.querySelector('.alert');
const alertButton = document.querySelector('.btn-alert');
const inputUser = document.querySelector('#usuario');
const inputPw = document.querySelector('#senha');

alertButton.addEventListener('click', () => {
    if(inputUser.value.length && inputPw.value.length){
        alertDiv.style.display = 'block';
    }
})