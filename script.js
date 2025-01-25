document.addEventListener("DOMContentLoaded", () => {
    // Adicionar a classe no-js ao body por padrão
    document.body.classList.add("no-js");
  
    // Selecionar todos os elementos com a classe fade-in
    const fadeElements = document.querySelectorAll(".fade-in");
  
    // Remover a classe no-js após o carregamento do JavaScript
    document.body.classList.remove("no-js");
  
    // Configuração do IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show"); // Adiciona a classe para iniciar o efeito
        } else {
          entry.target.classList.remove("show"); // Remove a classe para esconder novamente
        }
      });
    });
  
    // Adiciona o observador a todos os elementos com fade-in
    fadeElements.forEach((el) => observer.observe(el));
  });
  