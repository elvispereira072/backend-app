document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = new URLSearchParams(formData);

    try {
        const response = await fetch('/register', {
            method: 'POST',
            body: data
        });

        if (!response.ok) {
            throw new Error('Erro ao registrar.');
        }

        const result = await response.text();
        alert(result); // Exibe mensagem do servidor
    } catch (error) {
        console.error('Erro:', error.message);
        alert('Erro ao registrar.');
    }
});
