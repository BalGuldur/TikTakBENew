require 'faye'
Faye::WebSocket.load_adapter('thin')
require File.expand_path('../config/initializers/faye.rb', __FILE__)

# class ServerAuth
#   def incoming(message, callback)
#     if message['channel'] !~ %r{^/meta/}
#       # TODO: Add encrypt FAYE_TOKEN
#       if message['ext']['auth_token'] != FAYE_TOKEN
#         message['error'] = 'Invalid authentication token'
#       end
#     end
#     callback.call(message)
#   end
#
#   # IMPORTANT: clear out the auth token so it is not leaked to the client
#   def outgoing(message, callback)
#     if message['ext'] && message['ext']['auth_token']
#       message['ext'] = {}
#     end
#     callback.call(message)
#   end
# end

faye_server = Faye::RackAdapter.new(mount: '/faye', timeout: 45)
# faye_server.add_extension(ServerAuth.new)

run faye_server