class Triangle {
  constructor(color) {
    this.color = color
  }
  render() {
    return `<polygon points="50 15, 100 100, 0 100" style="fill:${this.color};" />`
  }
}

// Create a function to generate SVG file
const generateSvg = (data) => {
  const triangle = new Triangle(`${data.shapeColor}`)
  console.log(data.shape, triangle)
  return `
  <svg height="300" width="200">
  ${triangle.render()}
  </svg>`
}
// Export the main generateMarkdown function so we can use it in our app.
module.exports = generateSvg
