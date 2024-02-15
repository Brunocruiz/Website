// PORTFOLIO
document.getElementById("img-port1").addEventListener("click", function() {
    // Substitua a URL abaixo pela URL para a qual você deseja redirecionar
    window.location.href = "projetos/portfolio1/portfolio1.html";
  });

  // TEXTO DIGITADO
  document.addEventListener('DOMContentLoaded', function() {
    // Texto que será animado
    const texto = '<script>\nconsole.log("Bruno Martins da Cruz");\n</script>>';

  
    // Elemento onde o texto será exibido
    const elementoTexto = document.getElementById('texto-animado');
  
    // Inicializa a animação do texto
    typeWriter(texto, elementoTexto);
  });
  
  // Função para animação de digitação
  function typeWriter(text, targetElement) {
    let i = 0;
  
    function type() {
      if (i < text.length) {
        targetElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 50); // Ajuste aqui para controlar a velocidade de digitação
      }
    }
  
    type();
  }