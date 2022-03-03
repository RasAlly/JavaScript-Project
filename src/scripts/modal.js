document.addEventListener("DOMContentLoaded", () => {

  const closeBtn = document.getElementById('close-btn');
  const modalCont = document.getElementById('modal_cont');
  const intructBtn = document.getElementById('instructions-btn')

  const body = document.querySelector('body')


  closeBtn.addEventListener('click', () => {
    modalCont.style.display = 'none';
  })

  modalCont.addEventListener('click', () => {
    modalCont.style.display = 'none';
  })

  intructBtn.addEventListener('click', () => {
    // body.style.opacity = '0.1'
    modalCont.style.display = '';
    // modalCont.style.opacity = '1';
  })
})