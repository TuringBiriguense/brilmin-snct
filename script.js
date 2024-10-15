// Função para tocar som ao clicar nos personagens
function addClickEventsForPage(pageNumber) {
    if (pageNumber === 1||pageNumber === 2||pageNumber === 3) {
        // Página 1 - Som do lobo e do homem
        document.getElementById('lobo').addEventListener('click', function() {
            const loboAudio = new Audio('audio/loboguara.mp3');
            loboAudio.play();
        });

        document.getElementById('homem').addEventListener('click', function() {
            const homemAudio = new Audio('audio/velho.m4a');
            homemAudio.play();
        });

    } 
    // Adicione outros eventos de clique para páginas futuras, se necessário
}

// Função para tocar som de papel ao trocar de página
function playPaperSound() {
    const paperAudio = new Audio('papel.mp3');
    paperAudio.play();
}

// Função para mudar para a próxima página e configurar eventos de clique
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

    // Adicionar os eventos de clique para a nova página
    addClickEventsForPage(pageNumber);
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

    // Adicionar os eventos de clique para a página anterior
    addClickEventsForPage(pageNumber);
}

// Exibir a primeira página ao carregar
document.getElementById('page-1').style.display = 'block';

// Adicionar os eventos de clique para a primeira página
addClickEventsForPage(1);
