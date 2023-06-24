const { Triangle, Circle, Square } = require('./generateSvg')

describe('Testing All Classes', () => {
  const color = 'blue'
  const triangle = new Triangle(color)
  const circle = new Circle(color)
  const square = new Square(color)
  test('Adds color blue to class Triangle', () => {
    expect(triangle.render()).toBe(
      `<polygon points="100 30, 200 200, 0 200" style="fill:blue;" />`
    )
  })
  test('Adds color blue to class Circle', () => {
    expect(circle.render()).toBe(
      `<circle cx="100" cy="150" r="100" style="fill:blue;" />`
    )
  })
  test('Adds color blue to class Square', () => {
    expect(square.render()).toBe(
      `<rect width="200" height="200" style="fill:blue;" />`
    )
  })
})
