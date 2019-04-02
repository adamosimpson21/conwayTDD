import {gameOfLife, constructBoard, oneOrZero, getNumNeighbors} from "./index.js"

test("Input [[0]] returns [[0]]", () =>{
  expect(gameOfLife([[0]])).toEqual([[0]])
})

test("Input [[1]] returns [[0]]", () =>{
  expect(gameOfLife([[1]])).toEqual([[0]])
})

test("Input [[0, 0], [0, 0]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[0, 0], [0, 0]])).toEqual([[0, 0], [0, 0]])
})

test("Input [[1, 1], [1, 1]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[1, 1], [1, 1]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[1, 0], [0, 1]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[1, 0], [0, 1]])).toEqual([[0, 0], [0, 0]])
})

test("Input [[1, 0], [1, 1]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[1, 0], [1, 1]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[1, 1], [1, 0]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[1, 1], [1, 0]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[0, 1], [1, 1]] returns [[1, 1], [1, 1]]", () =>{
  expect(gameOfLife([[0, 1], [1, 1]])).toEqual([[1, 1], [1, 1]])
})

test("Input [[0, 0], [0, 1]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[0, 0], [0, 1]])).toEqual([[0, 0], [0, 0]])
})

test("Input [[0, 1], [0, 0]] returns [[0, 0], [0, 0]]", () =>{
  expect(gameOfLife([[0, 1], [0, 0]])).toEqual([[0, 0], [0, 0]])
})

test("OneOrZero returns 1 or 0", ()=> {
  const result = oneOrZero();
  let flag = false;
  if(result ===1 || result ===0){
    flag=true;
  }
  expect(flag).toBe(true);
})

// ConstructBoard tests begin here

test("Construct Board returns 2D array", () => {
  expect(constructBoard(1)[0]).toBeInstanceOf(Array);
})

test("Construct Board does not return 3D array", () => {
  expect(constructBoard(1)[0][0]).not.toBeInstanceOf(Array);
})

test("Construct Board(1) returns 2D array with length 1", () => {
  expect(constructBoard(1)[0].length).toBe(1);
})

test("Construct Board(2) returns 2D array with length 2", () => {
  expect(constructBoard(2)[0].length).toBe(2);
})

test("Construct Board returns some alive and some dead cells", () => {
  let aliveCells = 0;
  constructBoard(10).forEach(row => row.forEach(cell => cell && ++aliveCells));
  const passes = (aliveCells >=40 && aliveCells <= 60);
  expect(passes).toBe(true);
})

// testing getNumNeighbors
test("getNumNeighbors return a number", () => {
  expect(typeof getNumNeighbors()).toBe("number");
})