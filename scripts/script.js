const form = document.getElementById('form_cadastro');
const modal = document.getElementById('modal');
const fechar = document.getElementsByClassName('fechar')[0];

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";

    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data)
    localStorage.setItem('leadBlackFriday', convertData);
   
    setTimeout(() => {
        modal.style.display = "block";
    },1000)
});

fechar.onclick = ()=> {
    modal.style.display = "none";
};

window.onclick = (ev) => {
    if(ev.target == modal) {
        modal.style.display = "none"
    }; 
};