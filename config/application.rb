require_relative 'boot'

require 'rails/all'

# Добавлено для Faye
require 'net/http'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TikTakBENew
  class Application < Rails::Application

    config.time_zone = 'Moscow'
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
