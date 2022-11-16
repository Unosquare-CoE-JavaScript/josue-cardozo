const { Right, Left } = require('./either')
const Box = require('./box')
const { Task } = require('./types')

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

const { fromNullable } = require('./either')
const Box = require('./box')
const { Task } = require('./types')

const httpGet = (path, params) => Task.of('search-result')

const autoComplete = (term) =>
  fromNullable(term)
    .map((t) => httpGet('/search', { term: t }))
    .fold(
      (e) => Task.of(null),
      (x) => x,
    )

autoComplete('yo').fork(
  (e) => console.error(e),
  (x) => console.log(`updated screen: ${x}`),
)
