function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
  function openModal(id) {
    document.getElementById(id).style.display = 'block';
    document.body.classList.add('modal-open'); // 🔒 Lås scroll
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.classList.remove('modal-open'); // 🔓 Fjern scroll-lås
  }
  
  // Hvis du bruker klikk utenfor modal for å lukke
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });
  };
  window.addEventListener('load', () => {
    const bilde = document.querySelector('.profilbilde');
  
    // Start animasjon
    bilde.classList.add('spin');
  
    // Fjern klassen etter 1.5 sekunder (kan droppes om du bruker `forwards`)
    setTimeout(() => {
      bilde.classList.remove('spin');
    }, 1500);
  });
  