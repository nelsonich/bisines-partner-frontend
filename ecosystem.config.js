const os = require('os');

module.exports = {
  apps: [
    {
      instances: os.cpus().length,
      name: 'BisinesPartner - PM2',
      cwd: __dirname,
      autorestart: false,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },

      script: './node_modules/.bin/next',
      args: 'start ./dist --hostname localhost --port 8000',
      interpreter: 'node',
      interpreter_args: '--trace-warnings --unhandled-rejections=strict',

      error_file: './dist/error.log',
      out_file: './dist/output.log',
    },
  ],
};
