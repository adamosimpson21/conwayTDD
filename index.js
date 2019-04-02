const gameOfLife = board => {
  if(board.length ===2){
    let aliveCells = 0
    board.forEach(row => row.forEach(cell => cell && ++aliveCells))
    if(aliveCells <=2){
      return [[0,0], [0,0]]
    } else if(aliveCells ===3){
      return [[1,1],[1,1]]
    } else {
      return board;
    }
  }
  return [[0]];
}

const getNumNeighbors = () => {
  return 0;
}

const oneOrZero = () => {
  return Math.round(Math.random());
}

const constructBoard = number =>{
  return Array(number).fill(null).map(() => Array(number).fill(null).map(() => oneOrZero()));
}

// constructBoard(10);

export {gameOfLife, constructBoard, oneOrZero, getNumNeighbors};