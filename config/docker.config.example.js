var config = {
  logLevel: 'info',
  conalogHost: '192.168.0.230',
  conalogPort: 19527,
  conalogFrontPort: 9527,
  mongoUrl: 'mongodb://mongo:27017/conalog',
  redisUrl: 'redis://redis:6379',
  activeCollectorPrefix: 'ac_',
  passiveCollectorPrefix: 'pc_',
  apiGatewayHost: 'apigateway',
  apiGatewayPort: 1234,
  apiGatewayToken: '12345',
  apiGatewayUid: '67890',
  apiGatewayType: 'user'
}

module.exports = config;
