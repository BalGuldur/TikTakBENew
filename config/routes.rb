Rails.application.routes.draw do
  devise_for :users,
    controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: 'main#index'

  get 'main', to: 'main#index'

  devise_scope :user do
    get 'logout', to: 'devise/sessions#destroy'
  end

  get 'select_company', to: 'main#select_company', as: 'select_company'
  get 'choose_company', to: 'main#choose_company', as: 'choose_company'

  # Перенаправление страниц на react-router
  get 'test', to: 'main#index'

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
