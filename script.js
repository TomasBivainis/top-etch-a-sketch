const container = document.querySelector(".container");
const button = document.querySelector("button");
let light = 100;

button.addEventListener('click', () => {
  let num = prompt("Enter the size of the grid (100 is maximum):", 1);

  if(num == null) return;
  if(num > 100) num = 100;
  if(num <= 0) num = 1;

  deleteGrid();
  generateGrid(num);
})

generateGrid(16);

function generateGrid(num) {
  for(let i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.classList.add("row");
    for(let j = 0; j < num; j++) {
      const box = document.createElement('div');
      box.classList.add("box");
  
      box.addEventListener('mouseover', () => {
        box.style.background = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

        /*
        box.style.background = `hsl(${random(0, 360)}deg, ${random(0, 100)}%, ${light}%)`;
        light-=10;
        */
      })
  
      row.appendChild(box);
    }
  
    container.appendChild(row);
  }
}

function deleteGrid() {
  container.innerHTML = '';
}

function random(from, to) {
  to -= from;

  return Math.floor(Math.random() * to) + from;
}
