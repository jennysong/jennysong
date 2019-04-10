module.exports = {
  apps: [{
    name: 'jennysong',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-225-7-126.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/jennysongca.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jennysong/jennysong.git',
      path: '/home/ubuntu/jennysong',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}