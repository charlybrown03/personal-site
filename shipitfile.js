const SERVER_PATH = '/home/carlos/personal-site'

module.exports = shipit => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: SERVER_PATH,
      repositoryUrl: 'git@github.com:charlybrown03/personal-site.git',
    },
    prod: {
      servers: 'carlos@carlosmoreno.dev',
      workspace: SERVER_PATH,
    },
  })

  shipit.on('deployed', async () => {
    await shipit.remote(`cd ${SERVER_PATH}/current && npm i && npm run generate`)
  })
}
