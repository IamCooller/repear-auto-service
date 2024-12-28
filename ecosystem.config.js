const { watch } = require('fs');

module.exports = {
  apps: [
    {
      name: 'repear-auto-service',
      script: 'pnpm',
      args: 'run start',
      cwd: '/var/www/repear-auto-service',
      exec_mode: 'fork',
      interpreter: 'node',
      interpreter_args: '--initial-heap-size=256 --max-old-space-size=1024',
      autorestart: true,
      watch: false,
      max_memory_restart: '900M',
      env: {
        NODE_ENV: 'production',
        PORT: 3055
      }
    }
  ]
};
