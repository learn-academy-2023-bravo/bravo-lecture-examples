# Rails Params 4/18/2023

### Request-response cycle - HTTP

- request
  - actions: http verb - post, get, put, patch, delete
  - location: url
- response
  - code: 100, 200, 300, 400, 500
  - payload: html

### Params

- short for parameter
- params are a hash that adds info to URL

### Process

- rails g controller GitHubUserAccount
  - creates a controller file and view folder
- workflow: controller, route, view
- add a controller method
- add a route
- add a view
- add an instance variable to the controller: `@user = 'Sarah'`
- pass the instance variable to the view
- add a param: `@user = params[:username]`
- http://localhost:3000/github_user?username=Sarah
- require param in route: `get 'github_user/:username' => 'git_hub_user_account#github_user'`
- can add additional params
- from terminal: `Parameters: {"username"=>"Spencer", "logged_in"=>"true"}`
- params are always strings
