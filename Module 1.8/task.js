const { Task } = require('./types')
const fs = require('fs')

const app = () =>
  fs.readFile('config.json', 'utf-8', (err, contents) => {
    console.log(err, contents)
    if (err) throw err

    const newContents = contents.replace(/3/g, '6')

    fs.writeFile('config1.json', newContents, (err, _) => {
      if (err) throw err
      console.log('success!')
    })
  })

app()

const testUser = {id: 2, name: 'user1'}

const Db = ({
  find: _id =>
    Task((rej, res) => res(testUser))
})

Db.find(3)
.fork(console.log, console.log)
