// Create a function to generate HTML file
const generateHtml = (data) => {
  return `<!DOCTYPE html>
  <html>
  <body>
  
  ${data}
  
  </body>
  </html>`
}
// Export the main generateHtml function so we can use it in our app.
module.exports = generateHtml
