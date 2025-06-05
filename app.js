const readMoreBtn = document.querySelector(".read-more-btn");
const moreInfo = document.querySelector(".more-info");

readMoreBtn.addEventListener("click", () => {
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
  } else {
    moreInfo.style.display = "none";
  }
});

console.log("PS: Torchic is best starter Pokemon.");
