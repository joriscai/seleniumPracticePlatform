var nodemon = require('nodemon')
var ignore = ['tests/*', 'node_modules/', 'public/', '.git/', 'dev-server.js']
var url = 'http://localhost:3000'

// nodemon config
nodemon({
  script: './server/bin/www',
  ignore: ignore,
  verbose: true,
  colous: true
})

// set NODE_ENV development
process.env.NODE_ENV = 'development'

// nodemon EventListener
nodemon.once('start', function () {
  console.log('Ignore Watch Directory: ' + ignore.join(' '))
  console.log('App has started!')
  console.log('Listening at ' + url + '\n')
}).on('quit', function () {
  console.log('App has quit')
}).on('restart', function (files) {
  console.log('App restarted due to: ', files)
})
