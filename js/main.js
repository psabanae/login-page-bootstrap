const alertButton = document.querySelector('.btn-alert');
const inputUser = document.querySelector('#usuario');
const inputPw = document.querySelector('#senha');

const innerAlertDiv = `<div class="alert alert-success alert-dismissible fade show" role="alert">
<i class="bi bi-check-circle-fill"></i> Login Efetuado!
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

alertButton.addEventListener('click', () => {
    const alertDiv = document.querySelector('.alert');

    if(!inputUser.value || !inputPw.value) {
        return false;
    }

    if(!alertDiv) {
        const div = document.createElement('div');
        div.innerHTML += innerAlertDiv;
        document.body.prepend(div);
    }
})