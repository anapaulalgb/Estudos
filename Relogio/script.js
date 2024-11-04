function atualizarRelogio() {
    let agora = new Date();
    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');
    document.getElementById('hora').innerText = `${horas}:${minutos}:${segundos}`;
}

atualizarRelogio(); // Atualiza imediatamente ao carregar a página
setInterval(atualizarRelogio, 1000); // Atualiza a cada 1000 ms (1 segundo)