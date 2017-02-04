class V1::TestsController < V1::BaseController
  def faye_test_message
    message = {type: 'TEST', message: 'test message'}
    broadcast('/broadcast', message)
    render json: message, status: :ok
  end
end
