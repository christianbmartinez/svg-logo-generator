// Make a Triangle class
class Triangle {
  constructor(color) {
    this.color = color
  }
  render() {
    return `<polygon points="100 30, 200 200, 0 200" style="fill:${this.color};" />`
  }
}
// Make a Square class
class Square {
  constructor(color) {
    this.color = color
  }
  render() {
    return `<rect width="200" height="200" style="fill:${this.color};" />`
  }
}
// Make a Circle class
class Circle {
  constructor(color) {
    this.color = color
  }
  render() {
    return `<circle cx="100" cy="150" r="100" style="fill:${this.color};" />`
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
  }
  <text x="50%" y="${
    data.shape === 'square' ? '35%' : '50%'
  }" dominant-baseline="middle" text-anchor="middle" style="font-family:arial; font-size:40; fill:${
    data.textColor
  };">
${
  data.text.includes('Please enter 3 characters or less')
    ? data.textValidation
    : data.text
}
  </text>
  </svg>`
}
// Export the main generateMarkdown function so we can use it in our app.
module.exports = { generateSvg, Triangle, Circle, Square }
