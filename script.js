function scrollToPicks() {
  document.getElementById("picks").scrollIntoView({
    behavior: "smooth"
  });
}

function searchPlayer() {
  const search = document
    .getElementById("playerSearch")
    .value
    .toLowerCase();

  const cards = document.querySelectorAll(".pick-card");

  cards.forEach(function(card) {
    const name = card.dataset.name.toLowerCase();

    if (name.includes(search)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const sportButtons = document.querySelectorAll(".sport");

sportButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    sportButtons.forEach(function(btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(function(button) {
  button.addEventListener("click", function() {

    const card = button.closest(".pick-card");
    const player = card.dataset.name;

    alert("Research page for " + player);
  });
});