import fp from 'fastify-plugin'

export default fp(async fastify => {
  fastify.addHook('onResponse', async (_, reply) => {
    reply.elapsedTime
  }) // this has to be called in this hook - to enable all the other getResponseTime calls
  fastify.addHook('onSend', async (_, reply, payload) => {
    reply.header('X-Response-Time', reply.elapsedTime)
    return payload
  })
}, { fastify: '4.x || 5.x', name: 'fastify-response-timing' })
