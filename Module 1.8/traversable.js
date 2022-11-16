const Either = require('./either')
const { Right, Left, fromNullable } = Either
const { Task, Id } = require('./types')

const greaterThan5 = (x) =>
  x.length > 5 ? Right(x) : Left('not greater than 5')

const looksLikeEmail = (x) => (x.match(/@/gi) ? Right(x) : Left('not an email'))

const email = 'blahh@yadda.com'
const res = [greaterThan5, looksLikeEmail].map((v) => v(email))
console.log(res)

// nt(a.map(f)) == nt(a).map(f)
const eitherToTask = (e) => e.fold(Task.rejected, Task.of)

const fake = (id) => ({ id: id, name: 'user1', best_friend_id: id + 1 })

const Db = {
  find: (id) =>
    new Task((rej, res) =>
      setTimeout(() => res(id > 2 ? Right(fake(id)) : Left('not found')), 100),
    ),
}

const send = (code, json) =>
  console.log(`sending ${code}: ${JSON.stringify(json)}`)

Db.find(1)
  .chain((eu) =>
    eu.fold(
      (e) => Task.of(eu),
      (u) => Db.find(u.best_friend_id),
    ),
  )
  .fork(
    (error) => send(500, { error }),
    (eu) =>
      eu.fold(
        (error) => send(404, { error }),
        (x) => send(200, x),
      ),
  )
