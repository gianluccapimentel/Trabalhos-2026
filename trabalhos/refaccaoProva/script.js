// ===== QUESTÃO 04 - Função add() =====
// Dados do novo jogador: Lucas Paquetá
function add() {
    const container = document.getElementById('Cards');

    const novoCard = document.createElement('div');
    novoCard.className = 'card';
    novoCard.style.width = '22rem';
    novoCard.style.marginLeft = '20px';

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.png" class="card-img-top" alt="Lucas Paquetá">
        <div class="card-body">
            <h5 class="card-title">
                <span class="card-title">Lucas Paquetá</span>
                <span class="badge text-bg-secondary">8,8</span>
            </h5>
            <p class="card-text">
                <span><strong>Nascimento:</strong> 27/08/1997</span><br>
                <span><strong>Altura:</strong> 1,80</span><br>
                <span><strong>Posição:</strong> Meio-campista</span><br>
            </p>
        </div>
    `;

    container.appendChild(novoCard);
}
