const fs = require('fs')

let akash=fs.readFileSync('posts/post_1.txt') 
let akash1=fs.readFileSync('posts/post_2.txt') 
let akash2=fs.readFileSync('posts/post_3.txt') 
  let newHtml = `
  <html>
    <body>
      <div>${akash}</div>
    </body>
  </html>
  `
  let newHtml1 = `
  <html>
    <body>
      <div>${akash1}</div>
    </body>
  </html>
  `
  let newHtml2 = `
  <html>
    <body>
      <div>${akash2}</div>
    </body>
  </html>
  `
  fs.writeFile('build/post_1.html', newHtml.trim(), 'utf8', (err) => {
    if (err) console.log(err)
    
  })
  fs.writeFile('build/post_2.html', newHtml1.trim(), 'utf8', (err) => {
    if (err) console.log(err)
    
  })
  fs.writeFile('build/post_3.html', newHtml2.trim(), 'utf8', (err) => {
    if (err) console.log(err)
    
  })