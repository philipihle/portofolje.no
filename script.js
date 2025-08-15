function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Lås scrolling
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Fjern scroll-lås
  }
}

// Lukk modal hvis man klikker utenfor innholdet
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
};

// Spinn-animasjon på profilbilde ved innlasting
window.addEventListener("load", () => {
  const bilde = document.querySelector(".profilbilde");
  if (bilde) {
    bilde.classList.add("spin");
    setTimeout(() => {
      bilde.classList.remove("spin");
    }, 1500);
  }
});
