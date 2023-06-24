// Create a function to generate HTML file
const generateHtml = (data) => {
  return `<!DOCTYPE html>
  <html>
  <body style="width: 100%; height: 100%;">
  <div style="display: flex; flex-direction: row; justify-content:center; margin-top: 300px; align-items:center;">
  ${data}
  </div>
  </body>
  </html>`
}
// Export the main generateHtml function so we can use it in our app.
module.exports = generateHtml
