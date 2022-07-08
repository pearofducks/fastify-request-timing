import fp from 'fastify-plugin'

export default fp(async fastify => {
  fastify.addHook('onResponse', async (_, reply) => {
    reply.getResponseTime()
  }) // this has to be called in this hook - to enable all the other getResponseTime calls
  fastify.addHook('onSend', async (_, reply, payload) => {
    reply.header('X-Response-Time', reply.getResponseTime())
    return payload
  })
}, { fastify: '3.x || 4.x', name: 'fastify-response-timing' })
