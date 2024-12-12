/* Slide */
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

/* Pesquisa 
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = event.target.value;

    const items = document.querySelectorAll('.container-produtos')

    items.forEach(item =>{
        if(formatString(item.textContent).indexOf(value) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })
});

function formatString(value) {
    return value
        .toLowerCase()
        .trim();
}*/