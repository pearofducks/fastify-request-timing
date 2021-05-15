import Fastify from 'fastify'
import responseTimePlugin from './index.js'

export const addr = (ctx, path) => `http://localhost:${ctx.server.server.address().port}` + path
export const sleep = (n) => new Promise(r => setTimeout(r, n))

const getServer = () => {
  const server = Fastify()
  server.register(responseTimePlugin)
  return server
}

export const setup = ctx => ctx.server = getServer()
export const teardown = async ctx => await ctx.server.close()

