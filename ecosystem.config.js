module.exports = {
  apps: [
    {
      name: 'learn-investing',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      }
    }
  ]
};
