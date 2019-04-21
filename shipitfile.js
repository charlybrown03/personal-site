module.exports = shipit => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      dirToCopy: 'dist',
      deployTo: '/home/carlos/personal-site',
      repositoryUrl: 'git@github.com:charlybrown03/personal-site.git',
    },
    prod: {
      servers: 'carlos@carlosmoreno.dev',
    },
  })

  shipit.on('fetched', () => {
    return shipit.start('build')
  })

  shipit.blTask('build', async () => {
    await shipit.local('npm i', { cwd: shipit.workspace })
    await shipit.local('npm run generate', { cwd: shipit.workspace })
  })
}
