export default {
  input: './index.js',
  output: {
    exports: 'default',
    file: 'dist/index.cjs',
    format: 'cjs'
  },
  external: ['fastify-plugin']
}
