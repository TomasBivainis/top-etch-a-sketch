const container = document.querySelector(".container");
const button = document.querySelector("button");

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
        box.style.background = 'black';
      })
  
      row.appendChild(box);
    }
  
    container.appendChild(row);
  }
}

function deleteGrid() {
  container.innerHTML = '';
}
