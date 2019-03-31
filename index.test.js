import {gameOfLife, constructBoard} from "./index.js"

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