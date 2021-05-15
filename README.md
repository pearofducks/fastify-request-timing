# fastify-request-timing

## install

```shell
yarn add fastify-request-timing
```

## use

```js
import Fastify from 'fastify'
import requestTiming from 'fastify-request-timing'

const server = fastify()
server.register(requestTiming)
// or to dynamically import
server.register(await import('fastify-request-timing'))
```
