# Стартуем сервер Faye при старте Rails
# system("rakcup faye.ru -s thin -E production")
FAYE_TOKEN = 'test-test-test'
FAYE_PORT = '9292'
FAYE_HOST_FOR_SRV = 'localhost'
FAYE_HOST_FOR_CLIENT = "localhost"
FAYE_ADDR_FOR_SRV = "http://#{FAYE_HOST_FOR_SRV}:#{FAYE_PORT}/faye"
FAYE_ADDR_FOR_CLIENT = "http://#{FAYE_HOST_FOR_CLIENT}:#{FAYE_PORT}/faye"
