module ApplicationHelper
  def broadcast(channel, &block)
    message = {channel: channel, data: caputre(&block), ext: {auth_token: FAYE_TOKEN}}
    uri = URI.parse FAYE_ADDR_FOR_CLIENT
    Net::HTTP.post_form(uri, message: message.to_json)
  end
end
