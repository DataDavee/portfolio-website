const readMoreBtn = document.querySelector(".read-more-btn");
const moreInfo = document.querySelector(".more-info");

function handleClick(event) {
  event.preventDefault();
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
  } else {
    moreInfo.style.display = "none";
  }
}

readMoreBtn.addEventListener("click", handleClick);
readMoreBtn.addEventListener("touchstart", handleClick);
