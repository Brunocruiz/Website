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