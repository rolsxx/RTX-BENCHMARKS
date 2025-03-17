document.addEventListener('DOMContentLoaded', (event) => {
    const logoContainer = document.querySelector('.logo-container');
    const letters = document.querySelectorAll('.letter');
    let delay = 0;

    // Animação inicial das letras
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.animation = `appear 1.5s forwards`;
        }, delay);
        delay += 150;
    });

    // Efeito de separação ao clicar
    logoContainer.addEventListener('click', () => {
        letters.forEach((letter, index) => {
            letter.style.setProperty('--distance', index); // Define a distância com base no índice
            letter.classList.add('separate'); // Aplica a animação de separação
        });

        // Redireciona após a animação de separação
        setTimeout(() => {
            window.location.href = "home.html"; // Altere para o link da sua página principal
        }, 500); // Tempo da animação de separação
    });
});