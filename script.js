// NAV ROLAGEM SUAVE
document.addEventListener("DOMContentLoaded", function () {
  // Adiciona o evento de clique a todos os links da navegação
  document.querySelectorAll('.menu-desktop a, .btn-contato a').forEach(anchor => {
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


// CLICK PARA PORTFOLIO 1
function redirecionar() {
  window.location.href = 'file:///C:/Users/Bruno/Documents/MeusProjetos/Website/projetos/portfolio1/portfolio1.html';
}

  // TEXTO DIGITADO
  document.addEventListener('DOMContentLoaded', function() {
    // Texto que será animado com quebras de linha
    const texto = 'Desenvolvedor Full Stack.';
  
    // Elemento onde o texto será exibido
    const elementoTexto = document.getElementById('texto-animado');
  
    // Função para animação de digitação com quebras de linha
    function typeWriter(text, targetElement) {
      let i = 0;
      let reverse = false;
  
      function type() {
        if (!reverse) {
          if (i < text.length) {
            if (text.charAt(i) === '\n') {
              targetElement.innerHTML += '<br>'; // Adiciona quebra de linha usando a tag <br>
            } else {
              targetElement.innerHTML += text.charAt(i);
            }
  
            i++;
            setTimeout(type, 50); // Ajuste aqui para controlar a velocidade de digitação
          } else {
            // Quando o texto é totalmente digitado, inicia a fase de apagar
            reverse = true;
            setTimeout(type, 1000); // Aguarde 1 segundo antes de começar a apagar
          }
        } else {
          // Apaga um caractere por vez
          if (targetElement.innerHTML.length > 0) {
            targetElement.innerHTML = targetElement.innerHTML.slice(0, -1);
            setTimeout(type, 50); // Ajuste aqui para controlar a velocidade de apagar
          } else {
            // Quando o texto é totalmente apagado, reinicia a fase de digitar
            reverse = false;
            i = 0;
            setTimeout(type, 1000); // Aguarde 1 segundo antes de começar a digitar novamente
          }
        }
      }
  
      type();
    }
  
    // Inicializa a animação do texto
    typeWriter(texto, elementoTexto);
  });