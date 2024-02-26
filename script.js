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

// REDIRECIONANDO PROJETO 1,2 e 3
document.getElementById("card1").addEventListener("click", function() {
    // Defina o URL para redirecionamento
    var redirectURL = "projetos/projeto1/projeto1.html";

    // Redirecione para o URL especificado
    window.location.href = redirectURL;
});

document.getElementById("card2").addEventListener("click", function() {
    // Defina o URL para redirecionamento
    var redirectURL = "projetos/projeto2/projeto2.html";

    // Redirecione para o URL especificado
    window.location.href = redirectURL;
});

document.getElementById("card3").addEventListener("click", function() {
    // Defina o URL para redirecionamento
    var redirectURL = "projetos/projeto3/projeto3.html";

    // Redirecione para o URL especificado
    window.location.href = redirectURL;
});