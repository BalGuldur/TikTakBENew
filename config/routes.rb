Rails.application.routes.draw do
  devise_for :users,
    controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: 'main#index'

  get 'main', to: 'main#index'
  get 'logout', to: 'main#logout'

  devise_scope :user do
    get 'sign_out', to: 'devise/sessions#destroy'
  end

  get 'select_company', to: 'main#select_company', as: 'select_company'
  get 'choose_company', to: 'main#choose_company', as: 'choose_company'

  # Перенаправление страниц на react-router
  # Тестовое перенаправление
  get 'test', to: 'main#index'
  get 'locations', to: 'main#index'
  get 'employees', to: 'main#index'
  get 'halls_control', to: 'main#index'
  get 'menu_control', to: 'main#index'
  get 'work_window', to: 'main#index'

  # Внутренние ссылки API
  api_version(module: "V1", path: {value: "v1"}, default: true) do # RuboCop::Disable Metrics/BlockLength
    resources :visits, only: [:create, :destroy, :update] do
      get 'index', on: :collection
      get 'today', on: :collection
      get 'close', on: :member
    end
    resources :menu_items, only: [:create, :destroy, :update] do
      get 'index', on: :collection
    end
    resources :menu_categories, only: [:create, :destroy, :update] do
      get 'index', on: :collection
    end
    resources :menu_departments, only: [:create, :destroy, :update] do
      get 'index', on: :collection
      get 'index_with_nested', on: :collection
    end
    # post 'locations', to: 'locations#create', as: 'create_location'
    # TODO: change routes to get 'route', on: :collection
    resources :employees, only: [:create, :destroy, :update] do
      collection do
        get 'index', as: 'employees'
      end
    end
    resources :locations, only: [:create, :destroy] do
      member do
        get 'choose'
      end
    end
    resources :halls, only: [:create, :destroy, :update] do
      collection do
        get 'index', as: 'halls'
      end
    end
    resources :places, only: [:create, :destroy, :update] do
      collection do
        get 'index', as: 'places'
      end
    end
    get 'faye_test_message', to: 'tests#faye_test_message', as: 'faye_test_message'
  end

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
