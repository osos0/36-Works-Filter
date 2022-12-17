let filtersEl = document.querySelectorAll(".filter");
let boxsEl = document.querySelectorAll(".Box");

filtersEl.forEach((fil) => {
  fil.addEventListener("click", () => {
    filtersEl.forEach((fil) => {
      fil.classList.remove("active");
    });
    fil.classList.add("active");
  });

  fil.addEventListener("click", () => {
    console.log(fil.dataset.box);
    boxsEl.forEach((box) => {
      box.style.display = "none";
      if (box.classList.contains(fil.dataset.box)) {
        box.style.display = "flex";
      }
    });
  });
});
