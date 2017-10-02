const fs = require('fs')

// the directory where our files live



// fs.readdir returns an array of files in the directory
let files=fs.readdirSync('posts') 
console.log(files)

for(var i=0; i<files.length; i++ ){
   var akashdeep= fs.readFileSync(files[i]);
    
}
let newHtml = `
  <html>
    <body>
      <div>${akashdeep}</div>
    </body>
  </html>
  `
fs.writeFile('build/files.html', newHtml.trim(), 'utf8', (err) => {
    if (err) console.log(err)
    
  })

//   // use forEach() to loop over the files
//   files.forEach((file) => {
//     // read the files, we need to provide the directory again as the array only contains file names
//     fs.readFileSync(`${dir}/${file}`)
//       console.log(akash)
//     })
  