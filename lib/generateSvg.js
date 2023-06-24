// Make a Shape class
class Shape {
  constructor(color) {
    this.color = color
  }
}
// Make a Triangle class
class Triangle extends Shape {
  constructor(color) {
    super(color)
  }
  render() {
    return `<polygon points="50 15, 100 100, 0 100" style="fill:${this.color};" />`
  }
}
// Make a Square class
class Square extends Shape {
  constructor(color) {
    super(color)
  }
  render() {
    return `<rect width="200" height="200" style="fill:${this.color};" />`
  }
}
// Make a Circle class
class Circle extends Shape {
  constructor(color) {
    super(color)
  }
  render() {
    return `<circle cx="100" cy="100" r="100" style="fill:${this.color};" />`
  }
}

// Create a function to generate SVG file
const generateSvg = (data) => {
  const triangle = new Triangle(`${data.shapeColor}`)
  const square = new Square(`${data.shapeColor}`)
  const circle = new Circle(`${data.shapeColor}`)
  return `<svg height="300" width="200">
  ${
    data.shape === 'triangle'
      ? triangle.render()
      : data.shape === 'square'
      ? square.render()
      : data.shape === 'circle' && circle.render()
  }</svg>`
}
// Export the main generateMarkdown function so we can use it in our app.
module.exports = generateSvg
