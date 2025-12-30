export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', '/cms'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  proxy: { 
    koa: true
  },
});
