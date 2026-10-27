// 1. Gerar número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// 2. Definir o número máximo de tentativas e inicializar o contador
let tentativasRestantes = 10;

// Selecionar elementos do DOM
const inputPalpite = document.getElementById('palpite');
const btnChutar = document.getElementById('btn-chutar');
const elementoMensagem = document.getElementById('mensagem');
const elementoTentativas = document.getElementById('num-tentativas');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Função executada ao clicar em "Chutar"
function realizarChute() {
    const palpite = Number(inputPalpite.value);

    // Validar dados inseridos (se está vazio ou fora do intervalo 1-100)
    if (!inputPalpite.value || palpite < 1 || palpite > 100) {
        elementoMensagem.textContent = "Por favor, insira um número válido entre 1 e 100.";
        elementoMensagem.style.color = "#d63031";
        return;
    }

    // Decrementar o contador de tentativas e atualizar o ecrã
    tentativasRestantes--;
    elementoTentativas.textContent = tentativasRestantes;

    // Comparar o palpite com o número secreto usando condicionais
    if (palpite === numeroSecreto) {
        elementoMensagem.textContent = `Parabéns! Acertou o número secreto (${numeroSecreto})!`;
        elementoMensagem.style.color = "#00b894";
        encerrarJogo();
    } else if (palpite < numeroSecreto) {
        elementoMensagem.textContent = "O número secreto é **maior** do que o seu palpite.";
        elementoMensagem.style.color = "#e17055";
    } else {
        elementoMensagem.textContent = "O número secreto é **menor** do que o seu palpite.";
        elementoMensagem.style.color = "#e17055";
    }

    // Verificar se atingiu o limite de tentativas
    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        elementoMensagem.textContent = `Fim de jogo! Esgotou as tentativas. O número secreto era ${numeroSecreto}.`;
        elementoMensagem.style.color = "#d63031";
        encerrarJogo();
    }

    // Limpar o campo de input para a próxima tentativa
    inputPalpite.value = "";
    inputPalpite.focus();
}

// Função para desativar o jogo após o fim
function encerrarJogo() {
    inputPalpite.disabled = true;
    btnChutar.disabled = true;
    btnReiniciar.classList.remove('hidden');
}

// Event Listeners (Eventos de clique e tecla Enter)
btnChutar.addEventListener('click', realizarChute);

inputPalpite.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        realizarChute();
    }
});

btnReiniciar.addEventListener('click', function() {
    window.location.reload();
});

 
