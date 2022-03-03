document.addEventListener("DOMContentLoaded", () => {

  const closeBtn = document.getElementById('close-btn');
  const modalCont = document.getElementById('modal_cont');
  const intructBtn = document.getElementById('instructions-btn')

  closeBtn.addEventListener('click', () => {
    modalCont.style.display = 'none';
  })

  modalCont.addEventListener('click', () => {
    modalCont.style.display = 'none';
  })

  intructBtn.addEventListener('click', () => {
    modalCont.style.display = '';
  })
})