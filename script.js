const itemsContainer = document.querySelector(".items");
const items = document.querySelectorAll(".item");

let isDragging = false;
let startX;
let scrollLeft;

itemsContainer.addEventListener("mousedown", (e) => {
  e.preventDefault(); // Prevent default behaviors like text selection
  isDragging = true;
  startX = e.pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
  itemsContainer.classList.add("active");
  itemsContainer.style.cursor = 'grabbing';
});

itemsContainer.addEventListener("mouseup", () => {
  isDragging = false;
  itemsContainer.classList.remove("active");
  itemsContainer.style.cursor = 'grab';
});

itemsContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  itemsContainer.classList.remove("active");
  itemsContainer.style.cursor = 'grab';
});

itemsContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - itemsContainer.offsetLeft;
  const walk = (x - startX) * 2;
  itemsContainer.scrollLeft = scrollLeft - walk;
});

itemsContainer.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
  itemsContainer.classList.add("active");
  itemsContainer.style.cursor = 'grabbing';
});

itemsContainer.addEventListener("touchend", () => {
  isDragging = false;
  itemsContainer.classList.remove("active");
  itemsContainer.style.cursor = 'grab';
});

itemsContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - itemsContainer.offsetLeft;
  const walk = (x - startX) * 2;
  itemsContainer.scrollLeft = scrollLeft - walk;
});

itemsContainer.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
