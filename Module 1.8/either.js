const findColor = name =>
  ({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

const res = findColor("red");

console.log(res);

const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const fromNullable = x =>
x != null ? Right(x) : Left(null)

//=====================================


const fs = require('fs')

const getPort = () => {
  try {
    const str = fs.readFileSync('config.json')
    const config = JSON.parse(str)
    return config.port
  } catch(e) {
    return 3000
  }
}

const result = getPort()

console.log(result)

module.exports = {Right, Left, fromNullable}
