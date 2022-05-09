let btn = document.querySelector('.botao');
function olhar() {
    let input = document.querySelector('#inputSenha');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

