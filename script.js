// NAV ROLAGEM SUAVE
document.addEventListener("DOMContentLoaded", function () {
  // Adiciona o evento de clique a todos os links da navegação
  document.querySelectorAll('.nav-list a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          // Obtém o destino da rolagem
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          // Rola suavemente até o destino
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop,
                  behavior: 'smooth'
              });
          }
      });
  });
});


// DARK MOD

const darkMode = document.querySelector('.dark-mode');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})