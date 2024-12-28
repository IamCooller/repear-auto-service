const { watch } = require('fs');

module.exports = {
  apps: [
    {
      name: 'repear-auto-service',
      script: 'pnpm',
      args: 'run start',
      watch: true,
      env: {
        PORT: 3050,
        NODE_ENV: 'production'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '400M',
      max_restarts: 5
    }
  ]
};
