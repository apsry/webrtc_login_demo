var host = '192.168.1.104'
var port = 3000

if (typeof window === 'undefined') {
  module.exports = {
    host,
    port
  }
}
