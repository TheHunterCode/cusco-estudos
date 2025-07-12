
function alternarModo() {
  document.body.classList.toggle('modo-escuro');
  const atual = document.body.classList.contains('modo-escuro') ? 'Claro' : 'Escuro';
  document.querySelector('.btn-toggle').textContent = atual === 'Claro' ? '🌞 Modo Claro' : '🌗 Modo Escuro';
}
