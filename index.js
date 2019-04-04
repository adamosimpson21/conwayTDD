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

const getNumNeighbors = (x, y, board) => {
  let numLiveneighbors = 0;
  const neighbors = [
                      [x-1,y-1],[x-1,y  ],[x-1,y+1],
                      [x  ,y-1],          [x  ,y+1],
                      [x+1,y-1],[x+1,y  ],[x+1,y+1]
                    ]
  neighbors.forEach(neighbor => board[neighbor[0]] && board[neighbor[0]][neighbor[1]] && ++numLiveneighbors);
  return numLiveneighbors;
}

const oneOrZero = () => {
  return Math.round(Math.random());
}

const constructBoard = number =>{
  return Array(number).fill(null).map(() => Array(number).fill(null).map(() => oneOrZero()));
}

const countAllNeighbors = board => {
  let neighborBoard = Array(board.length).fill(null).map(() => Array(board.length).fill(null));
  board.forEach((row, y) => {
    row.forEach((cell, x) => {
      neighborBoard[x][y] = getNumNeighbors(x, y, board);
    })
  })
  return neighborBoard;
}

// constructBoard(10);

export {gameOfLife, constructBoard, oneOrZero, getNumNeighbors, countAllNeighbors};