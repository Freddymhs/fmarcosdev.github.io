---
title: "guia-crear-api-authenticated-rails"
path: blog/guia-crear-api-authenticated-rails
tags: [fmarcosdev]
cover: ./popular-commands-sql.jpg
date: 2021-02-25
draw: true
excerpt: guia-crear-api-authenticated-rails
---

# README

# creando proyecto

rails new -example_RoR-jwt.apirestauthentication --api

# configuraciones que gemfile debe tener

- gem 'bcrypt', '~> 3.1.7' //enable
- gem 'jwt' //add
- gem 'rack-cors' //enalbe

```
bundle install
```

# BD

debe usar la base de datos de su preferencia , yo usare sqlite  
rails db:create && rails db:migrate

# file CORS

- EDITAR -> config/initializers/cors.rb

```
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

# file routes

- EDITAR -> config/routes.rb

```
Rails.application.routes.draw do
  resource :users, only: [:create]
  post '/login', to: 'users#login'
  get '/auto_login', to: 'users#auto_login'
  post '/register', to: 'users#create'
end
```

# scaffold para API = rails g resources X

```
rails generate resource User username:string password_digest:string
rails db:migrate
```

# seguridad modelo

- EDITAR -> app/models/user.rb

```
class User < ApplicationRecord
    has_secure_password
end
```

# seeds

- EDITAR -> db/seeds.rb

```
user = User.create(username: "freddy", password: "pTKM&^9x2#")
```

```
rails db:seed
```

# agregar seguridad controlador principal

- EDITAR -> app/controllers/application_controller.rb

```
class ApplicationController < ActionController::API
    before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, 'yourSecret')
  end

  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'yourSecret', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def logged_in_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!logged_in_user
  end

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
```

# user controller

```
class UsersController < ApplicationController
  before_action :authorized, only: [:auto_login]

  # REGISTER
  def create
    @user = User.create(user_params)
    if @user.valid?
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}
    else
      render json: {error: "Invalid username or password"}
    end
  end

  # LOGGING IN
  def login
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}
    else
      render json: {error: "Invalid username or password"}
    end
  end


  def auto_login
    render json: @user
  end

  private

  def user_params
    params.permit(:username, :password, :age)
  end

end
```

# guia test en POSTMAN

- REGISTER

POST -> localhost:3000/register
body -> raw -> { "username":"alfredo", "password" : "PassworsUPERS3CRET4"}

- entrega token

{
"user": "#<User:0x000000012efcfe20>",
"token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0fQ.3BbRA0X8L4RCsF8-r4w6HrL4hFQKeGz6OQ522OyH57I"
}

- LOGIN

Post -> localhost:3000/login
body -> raw -> { "username" : "freddy", "password" : "Wd12XCZ.12312!%!>123!<@#!XxxXaxa" }

- entrega toekn

{
"user": "#<User:0x000000012e9e2f08>",
"token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyfQ.4aV9sPAQmgK4hTBPihEXF3CVkzLDz3jsmWShy2TtQfU"
}

- AUTO LOGIN

GET -> localhost:3000/auto_login
Headers -> Autorization -> bearer [token]

- entrega autenticacion

{
"id": 2,
"username": "freddy",
"password_digest": "$2a$12$4JN5xZDrhfL9baT6vqsu2ebrHDxawW30aEBjvWjajbwew3B1Zk/S.",
"created_at": "2021-02-24T19:10:07.339Z",
"updated_at": "2021-02-24T19:10:07.339Z"  
}

---

---

---

# Elementos que un usuario pueda administrar

- rails generate scaffold note message:string user:references

- revisar relacion de los modelos , belong ,has_many

- editar el controlador

- POSTMAN , ya logeado revisar tus notas  
  GET -> localhost:3000/notes  
  Headers -> Autorization -> bearer [token]

- POSTMAN , crear una nota nueva
  POST -> localhost:3000/notes  
  body -> raw -> { "message":"hola mundo!", "user_id" : "1"}

se pueden registrar varios usuarios
se pueden logear varios usuarios
los usuarios pueden crear sus notas
los usuarios pueden ver sus notas
los usuarios pueden actualizar una nota [no aun]
los usuarios pueden eliminar una nota [no aun]

guia base de alexmercedcoder
https://tuts.alexmercedcoder.com/2020/ruby-tut/
