let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
if(
 (arr[0]== arr[1]&& arr[1]== arr[2]) ||
 (arr[3]== arr[4]&& arr[4]== arr[5]) ||
 (arr[6]== arr[7]&& arr[7]== arr[8]) ||
 (arr[0]== arr[1]&& arr[1]== arr[2]) ||
 (arr[0]== arr[1]&& arr[1]== arr[2]) ||
)
}

function handleClick(el) {
  const id = Number(el.id);
  array[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "0" : "X";
  console.log(arr);
}
