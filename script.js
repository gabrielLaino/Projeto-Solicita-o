let getInput = document.querySelectorAll('input');
let getBotao = document.querySelector('button');
let getOl = document.querySelector('ul');


getBotao.addEventListener('click', function(){
    let criaLi = document.createElement('li');
    for(let index = 0; index < getInput.length; index += 1){
        let textoInput = getInput[index].value;
        if(textoInput.trim() !== ""){
            getOl.appendChild(criaLi);
            criaLi.innerText = `Técnico: ${getInput[0].value} - Cofre: ${getInput[1].value} - Quantidade: ${getInput[2].value}`;
        }
    }
})