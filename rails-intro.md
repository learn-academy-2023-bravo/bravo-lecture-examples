# Rails intro 4/12/2023

- Rails is a framework that uses Ruby
- Rails follows MVC architecture - organization/structure of code
- M - Model
- V - View
- C - Controller

- Model is database layer
- View - what the user sees
- Controller - switch board

- FULLSTACK! 

# Creating a Rails App
- rails new <app-name> -d postgresql -T
 - -d postgresql drops the out of the box database and installs postgres in its place
 - -T drops the MiniTest testing suite (must be Capitalized T)

# Notes
- server-side web app framework
- "Convention over Configuration"
 - convention around how files are structured and database is designed
 - Rails Magic

## CREATE DB
- First thing after you create a rails app, after cd-ing into it, create database
- $ cd my_app
- $ rails db:create
- $ rails server or rails s  --> starts the server. go to localhost:3000 in browser



