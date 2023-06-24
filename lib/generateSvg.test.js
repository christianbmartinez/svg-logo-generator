const { Triangle, Circle, Square } = require('./generateSvg')

const color = 'blue'
const triangle = new Triangle()

test('Adds color blue to class Triangle', () => {
  expect(triangle.render(color)).toBe(
    `<polygon points="100 30, 200 200, 0 200" style="fill:blue;" />`
  )
})
