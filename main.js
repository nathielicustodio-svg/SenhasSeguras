const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 5;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
   if (tamanhoSenha > 1) {
       tamanhoSenha--;
   }
   numeroSenha.textContent = tamanhoSenha;
   geraSenha();
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha();
campoSenha.value = letrasMaiusculas; 

function geraSenha(){
    let senh = '';
    for (let i = o; < tamanhoSenha;i++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[mumeroAleatorio];
}
campoSenha.value = letrasMaiusculas;
}

