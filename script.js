// Função para tocar som ao clicar nos personagens
document.getElementById('lobo').addEventListener('click', function() {
    const loboAudio = new Audio('lobo.mp3');
    loboAudio.play();
});

document.getElementById('homem').addEventListener('click', function() {
    const homemAudio = new Audio('homem.mp3');
    homemAudio.play();
});

// Função para tocar o som de fundo
const forestAudio = document.getElementById('forest-audio');
forestAudio.volume = 0.5; // Ajustar o volume do som da floresta

// Função para tocar som de papel ao trocar de página
function playPaperSound() {
    const paperAudio = new Audio('papel.mp3');
    paperAudio.play();
}

// Função para mudar para a próxima página
function nextPage(pageNumber) {
    // Tocar som de papel
    playPaperSound();

    // Alternar páginas
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    currentPage.style.display = 'none';

    const nextPage = document.getElementById('page-' + pageNumber);
    if (nextPage) {
        nextPage.style.display = 'block';
    }
}

// Função para voltar para a página anterior
function prevPage(pageNumber) {
    // Tocar som de papel
    playPaperSound();

    // Alternar páginas
    const currentPage = document.querySelector('.page:not([style*="display: none"])');
    currentPage.style.display = 'none';

    const prevPage = document.getElementById('page-' + pageNumber);
    if (prevPage) {
        prevPage.style.display = 'block';
    }
}

// Exibir a primeira página ao carregar
document.getElementById('page-1').style.display = 'block';
