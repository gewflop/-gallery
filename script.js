const modal      = document.getElementById('buyModal');
  const modalClose = document.getElementById('modalClose');
  const modalOk    = document.getElementById('modalOk');

  // открытие по любой кнопке Buy Now
  document.querySelectorAll('.card button').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('open');
    });
  });

  // закрытие: крестик, OK, клик по фону, Esc
  modalClose.addEventListener('click', () => modal.classList.remove('open'));
  modalOk.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });