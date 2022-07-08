import { suite } from 'uvu'
import * as assert from 'uvu/assert'
import got from 'got'
import { setup, teardown, addr, sleep } from './_helpers.js'

const Plugin = suite('Plugin')
Plugin.before.each(setup)
Plugin.after.each(teardown)

Plugin('adds the x-response-time header', async context => {
  context.server.get('/', (_, reply) => reply.status(204).send())
  await context.server.listen({ port: 0 })
  const res = await got.get(addr(context, '/'))
  assert.ok(res.headers['x-response-time'])
})

Plugin('has a timing that is realistic', async context => {
  const requestDuration = 320
  context.server.get('/', async (_, reply) => {
    await sleep(requestDuration)
    reply.status(204).send()
  })
  await context.server.listen({ port: 0 })
  const res = await got.get(addr(context, '/'))
  assert.ok(res.headers['x-response-time'] > requestDuration)
})

Plugin.run()
