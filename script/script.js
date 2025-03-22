document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
    
    // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário.

    // Limpar o formulário
    this.reset();
});