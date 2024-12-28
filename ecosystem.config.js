const { watch } = require('fs');

module.exports = {
  apps: [
    {
      name: 'repear-auto-service',
      script: 'pnpm',
      args: 'run start',
      watch: true,
      env: {
        PORT: 3055,
        NODE_ENV: 'production'
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      interpreter_args: '--max-old-space-size=1024', // Увеличим лимит до 1 ГБ
      max_memory_restart: '700M', // Рестарт, если приложение превышает 700 MB
      max_restarts: 5
    }
  ]
};
