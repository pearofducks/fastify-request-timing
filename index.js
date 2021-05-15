import fp from 'fastify-plugin'

export default fp((fastify, _, done) => {
  fastify.addHook('onResponse', (_, reply) => reply.getResponseTime()) // this has to be called in this hook - to enable all the other getResponseTime calls
  fastify.addHook('onSend', (_, reply) => reply.header('X-Response-Time', reply.getResponseTime()))
  done()
}, { fastify: '3.x', name: 'fastify-response-timing' })
