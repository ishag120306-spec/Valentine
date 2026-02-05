const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");

if (noButton) {
  noButton.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.offsetHeight));
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  });
}

if (yesButton) {
  yesButton.addEventListener("click", yesClick);
}

document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").classList.remove("hidden");
});

function yesClick() {
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-3").classList.remove("hidden");

  const items = document.querySelectorAll(".love-item");
  let index = 0;

  function showNextItem() {
    // reset all
    items.forEach(item => item.classList.remove("show"));

    const currentItem = items[index];
    currentItem.classList.add("show");

    const video = currentItem.querySelector("video");
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }

    index++;

    if (index >= items.length) {
      index = 0; // restart loop
    }
  }

  // show first immediately
  showNextItem();

  // keep showing every 2.5 seconds
  setInterval(showNextItem, 2500);
}



